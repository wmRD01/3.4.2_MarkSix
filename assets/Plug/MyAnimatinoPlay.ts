import { AnimationClip, AnimationComponent, Node } from "cc"

class AnimationPlay {
    play(_Component: AnimationComponent, name?: string, isloop?: boolean) {
        _Component.getState(name).wrapMode = isloop ?
            AnimationClip.WrapMode.Loop :
            AnimationClip.WrapMode.Normal
        name ?
            _Component.play(name) :
            _Component.play()

        setTimeout(() => {
            name ?
                _Component.play(name) :
                _Component.play()
        }, 16);
    }
}

export default new AnimationPlay()