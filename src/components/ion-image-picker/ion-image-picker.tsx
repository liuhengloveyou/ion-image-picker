import { Component, ComponentInterface, Event, State, EventEmitter, Method, Prop, Watch } from '@stencil/core';
import { StyleEventDetail } from '@ionic/core';


@Component({
  tag: 'ion-image-picker',
  styleUrl: 'ion-image-picker.css',
  shadow: true
})
export class IonImagePicker implements ComponentInterface {
  constructor() {
    this.onClick = this.onClick.bind(this);
    this.handleFiles = this.handleFiles.bind(this);

    this.value = [];
  }

  // private buttonEl?: HTMLButtonElement;
  private fileEl?: HTMLInputElement;

  /**
   * If `true`, the user cannot interact with the datetime.
   */
  @Prop() disabled = false;

  /**
   * If `true`, the datetime appears normal but is not interactive.
   */
  @Prop() readonly = false;

  @Watch('disabled')
  protected disabledChanged() {
    this.emitStyle();
  }

  /**
  * 最多显示多少张图片
  */
  @Prop() max: number = 1;

  @State() value?: string[];

  /**
   * Emitted when the value (selected date) has changed.
   */
  @Event() ionChange!: EventEmitter<void>;

  /**
   * Emitted when the styles change.
   * @internal
   */
  @Event() ionStyle!: EventEmitter<StyleEventDetail>;

  componentWillLoad() {
    this.emitStyle();
  }

  onClick() {
    this.fileEl.click();
  }

  /**
   * Opens the datetime overlay.
   */
  @Method()
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
    }

    check();

    for (let i = 0; i < len; i++) {
      let reader = new FileReader();
      reader.onload = function () {
        urlArr.push(this.result.toString());
      };
      reader.readAsDataURL(e.target.files[i]);
    }
  }

  private emitStyle() {
    this.ionStyle.emit({
      'interactive': true,
      'datetime': true,
      'interactive-disabled': this.disabled,
    });
  }

  render() {
    return [
      <div class="img-container">
        {this.value.map((v) =>
          <img src={v}></img>
        )}
        <button
          type="button" 
          id="filebutton"
          class="filebutton"
          disabled={this.disabled}
          onClick={this.onClick}
        ></button>
      </div>,
      <input
        type="file"
        id="fileelem"
        accept="image/*"
        multiple
        onChange={this.handleFiles}
        ref={el => this.fileEl = el}
      ></input>
    ];
  }
}
