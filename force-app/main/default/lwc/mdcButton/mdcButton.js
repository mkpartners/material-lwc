import { LightningElement, api, track } from 'lwc';

export default class MdcButton extends LightningElement {
  @api label;
  @api variant = 'Text';
  @api icon;
  @api iconLocation;
  @api themePrimary = 'red';
  
  @track _class;

  connectedCallback(){
    this._class = 'mdc-button';
    if ( this.variant === 'Raised' ){
      this._class = 'mdc-button mdc-button--raised';
    }
    else if ( this.variant === 'Outlined' ){
      this._class = 'mdc-button mdc-button--outlined';
    }
    else if ( this.variant === 'Unelevated' ){
      this._class = 'mdc-button mdc-button--unelevated';
    }
    if ( this.iconLocation && this.iconLocation === 'Before' ){
      this.iconBefore = true;
    }
    else if ( this.iconLocation && this.iconLocation === 'After' ){
      this.iconAfter = true;
    }
    let _themePrimary = '--mdc-theme-primary: '+this.themePrimary;
    this.setAttribute('style',_themePrimary);
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