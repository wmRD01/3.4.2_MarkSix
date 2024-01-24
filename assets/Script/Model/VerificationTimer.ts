import { Button, Label } from "cc";

export class VerificationTimer {
    time: number = 5
    orgStr: string;

    constructor(_label: Label, _button: Button, _time: number) {
        this.orgStr = _label.string;
        let rememberOrgStr = _label.string
        _button.interactable = false
        this.time = _time ? _time : this.time;
        _label.string = `${this.time.toString()}s`
        let loop = setInterval(() => {
            this.time--;
            if (this.time < 0) {
                _button.interactable = true
                _label.string = rememberOrgStr
                clearInterval(loop)
                return
            }
            _label.string = `${this.time.toString()}s`
        }, 1000)
    }
}