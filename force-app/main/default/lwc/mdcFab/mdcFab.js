import { LightningElement, api, track } from 'lwc';

export default class MdcFab extends LightningElement {
  @api label;
  @api variant = '';
  @api icon;
  @api iconLocation;
  @api themeSecondary = 'red';
  
  @track _class;
  @track _demoMode;

  connectedCallback(){
    this._demoMode = !this.label && !this.icon;
    this._class = 'mdc-fab mdc-fab-ripple-upgraded';

    if ( this.variant === 'Extended' ){
      this._class = 'mdc-fab mdc-fab--extended mdc-ripple-upgraded';
    }
    else if ( this.variant === 'Mini' ){
      this._class = 'mdc-fab mdc-fab--mini mdc-ripple-upgraded';
    }
    if ( this.iconLocation && this.iconLocation === 'After' ){
      this.iconAfter = true;
    }
    else {
      this.iconBefore = true;
    }
    let _themeSecondary = '--mdc-theme-secondary: '+this.themeSecondary;
    this.setAttribute('style',_themeSecondary);
  }

  handleOnClick(){
    this.dispatchEvent(new CustomEvent('mdcclick', {detail: this.label}));
  }

  handleOnMouseOver(){
    this.dispatchEvent(new CustomEvent('mdcmouseover', {detail: this.label}));
  }

  handleOnMouseOut(){
    this.dispatchEvent(new CustomEvent('mdcmouseout', {detail: this.label}));
  }

}