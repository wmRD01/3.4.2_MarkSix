import { js } from "cc";
import BaseSingleton from "./Singleton/BaseSingleton";
export abstract class State {
    protected context: Context;
    public setContext(context: Context) {
    this.context = context;
    }
    public abstract changeState(data): void;

    stayState(data) {
        this.changeState(data);
    };
}





class Context extends BaseSingleton<Context>() {
    /**
     * @type {State} A reference to the current state of the Context.
     */
    private state: State;

    private data: any;

    // public isStateing: boolean;


    clearState(): void {
        this.state = null;
        this.data = null;
    }

    checkState(): boolean {
        return this.state == undefined ? false : true;
    }
    /**
     * The Context allows changing the State object at runtime.
    */
    public transitionTo<T extends State>(_class: { new(): T }, data?: any) {

        if (!(this.state instanceof _class)) {
            this.data = data ? data : null
            let newT = new _class();
            this.state = newT as State
            this.state.setContext(this);
            this.requestChange()
        }
        else {
            this.requestStay(data)
        }
    }


    /**
     * 舊方法
     */
    public transitionTo_Old(state: State, data?: any): Context {

        // if (this.state != null && MainModel.getClassName(<any>state) == MainModel.getClassName(this.state)) {
        //     console.log(`Context: NowState ${(this.state).constructor.name}.`);
        //     this.isStateing = true
        //     return
        // }
        // this.isStateing = false
        // console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
        this.data = data ? data : null
        this.state = state;
        // this.setMainScript()
        this.state.setContext(this);
        return this
    }

    /**
     * The Context delegates part of its behavior to the current State object.
     */
    public requestChange(): void {
        // console.log(`requestChange to ${js.getClassName(this.state)}`);
        this.state.changeState(this.data);
    }

    public requestStay(data?: any): void {
        this.data = data ? data : null
        this.state.stayState(data);
    }
    //打包後變數會被混淆，導致無法知道誰是誰，因此就只能先這樣，等待可以找到被混淆後的js明子再說，暫時先放著了
    // public setMainScript() {
    //     /**想不到更好寫法 先暫時這樣定義單利，雖然多佔2x5個記憶體空間，但目前先這樣 */
    //     if (!(this.state as MainGameState).main && MainGame.instance) {
    //         (this.state as MainGameState).main = MainGame.instance
    //     }
    //     if (!(this.state as MainLobbyState).main && MainLobby.instance) {
    //         (this.state as MainLobbyState).main = MainLobby.instance
    //     }
    //     if (!(this.state as MainLoadingState).main && MainLoading.instance) {
    //         (this.state as MainLoadingState).main = MainLoading.instance
    //     }
    //     // console.log(`main:${(this.state as MainGameState).main}`);
    //     // console.log(`lobby:${(this.state as MainLobbyState).main}`);
    //     // console.log(`loading:${(this.state as MainLoadingState).main}`);
    // }
}


export class GameState extends Context { };
export class LobbyState extends Context { };
export class PlayerState extends Context { };
export class ViewState extends Context { };
export class MessageState extends Context { };
// export const GameState = new Context();
// export const LobbyState = new Context();
// export const PlayerState = new Context();
// export const ViewState = new Context();
// export const MessageState = new Context();

// export const TestState = new Context();
// export default new Context();
