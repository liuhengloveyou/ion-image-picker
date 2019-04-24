const e=window.ionimagepicker.h;class t{constructor(){this.disabled=!1,this.readonly=!1,this.max=1,this.onClick=this.onClick.bind(this),this.handleFiles=this.handleFiles.bind(this),console.log(this.value),this.value=[]}disabledChanged(){this.emitStyle()}valueChanged(){this.emitStyle(),this.ionChange.emit({value:this.value})}componentWillLoad(){this.emitStyle()}onClick(){this.fileEl.click()}async open(){}handleFiles(e){let t=this;this.value=[];let i=[],a=e.target.files.length;a>this.max&&(a=this.max);var l=function(){a!==i.length?setTimeout(l,200):t.value=i};l();for(let t=0;t<a;t++){let a=new FileReader;a.onload=function(){i.push(this.result.toString())},a.readAsDataURL(e.target.files[t])}}emitStyle(){}render(){return[e("div",{class:"img-container"},this.value.map(t=>e("img",{class:"rect",src:t})),e("button",{type:"button",id:"filebutton",class:"rect filebutton",disabled:this.disabled,onClick:this.onClick})),e("input",{type:"file",id:"fileelem",accept:"image/*",multiple:!0,onChange:this.handleFiles,ref:e=>this.fileEl=e})]}static get is(){return"ion-image-picker"}static get encapsulation(){return"shadow"}static get properties(){return{disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},max:{type:Number,attr:"max"},open:{method:!0},readonly:{type:Boolean,attr:"readonly"},value:{type:"Any",attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".img-container,:host{display:-ms-flexbox;display:flex;position:relative;text-overflow:ellipsis;white-space:wrap}.img-container{-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start}.img-container .rect{position:relative;width:22vw;height:22vw;margin:0 5px 5px 0}.filebutton{border:1px solid;color:#f4f5f8;-webkit-transition:color .25s;transition:color .25s}.filebutton:before{width:50%;margin-left:-25%;margin-top:-1.5px;border-top:3px solid}.filebutton:after,.filebutton:before{position:absolute;content:\"\";left:50%;top:50%}.filebutton:after{height:50%;margin-left:-1.5px;margin-top:-25%;border-left:3px solid}input{display:none}"}}export{t as IonImagePicker};