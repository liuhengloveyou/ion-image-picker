export class IonImagePicker {
    constructor() {
        this.disabled = false;
        this.readonly = false;
        this.max = 1;
        this.onClick = this.onClick.bind(this);
        this.handleFiles = this.handleFiles.bind(this);
        console.log(this.value);
        this.value = [];
    }
    disabledChanged() {
        this.emitStyle();
    }
    valueChanged() {
        this.emitStyle();
        this.ionChange.emit({
            value: this.value
        });
    }
    componentWillLoad() {
        this.emitStyle();
    }
    onClick() {
        this.fileEl.click();
    }
    async open() {
        if (this.disabled) {
            return;
        }
    }
    handleFiles(e) {
        let self = this;
        this.value = [];
        let urlArr = [];
        let len = e.target.files.length;
        if (len > this.max) {
            len = this.max;
        }
        var check = function () {
            if (len === urlArr.length) {
                self.value = urlArr;
                return;
            }
            setTimeout(check, 200);
        };
        check();
        for (let i = 0; i < len; i++) {
            let reader = new FileReader();
            reader.onload = function () {
                urlArr.push(this.result.toString());
            };
            reader.readAsDataURL(e.target.files[i]);
        }
    }
    emitStyle() {
    }
    render() {
        return [
            h("div", { class: "img-container" },
                this.value.map((v) => h("img", { class: "rect", src: v })),
                h("button", { type: "button", id: "filebutton", class: "rect filebutton", disabled: this.disabled, onClick: this.onClick })),
            h("input", { type: "file", id: "fileelem", accept: "image/*", multiple: true, onChange: this.handleFiles, ref: el => this.fileEl = el })
        ];
    }
    static get is() { return "ion-image-picker"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "watchCallbacks": ["disabledChanged"]
        },
        "max": {
            "type": Number,
            "attr": "max"
        },
        "open": {
            "method": true
        },
        "readonly": {
            "type": Boolean,
            "attr": "readonly"
        },
        "value": {
            "type": "Any",
            "attr": "value",
            "mutable": true,
            "watchCallbacks": ["valueChanged"]
        }
    }; }
    static get events() { return [{
            "name": "ionChange",
            "method": "ionChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:ion-image-picker:**/"; }
}
