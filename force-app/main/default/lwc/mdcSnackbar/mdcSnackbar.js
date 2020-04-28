import { LightningElement, api, track } from 'lwc';

export default class MdcSnackbar extends LightningElement {
  @api dismiss = 'DISMISS';
  @track _message = 'Message';
  @track _class = 'notification';

  toggleInactive(e) {
    e.preventDefault();
    this._class = 'notification';
    const detail = {isActive:false};
    this.dispatchEvent(new CustomEvent('deactivate',{detail}));
  }
  
  get isActive() {
    return _class;
  }

  @api
  set isActive(v) {
    this.setAttribute('isActive',v);
    this._class = v ? 'notification active' : 'notification';
    console.log('SNACKBAR TOGGLING',this._class)
  }

  get hasMessage() {
    return this._message;
  }
  
  @api
  set hasMessage(v) {
    console.log('SETTING THE MESSAGE',v)
    this.setAttribute('message',v);
    this._message = v;
  }
}