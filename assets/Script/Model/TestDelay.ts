import BaseComponent from "./ComponentBase";

export default class TestDelay extends BaseComponent {
    isdelay: boolean = false;
    delay: number = 0
    constructor() {
        super()
        this.isdelay = true
    }
    stopDelay() {
        this.isdelay = false
        // console.error(this.delay);
        this.destroy()
    }
    update(dt: number) {
        if (this.isdelay)
            this.delay += dt
    }
}