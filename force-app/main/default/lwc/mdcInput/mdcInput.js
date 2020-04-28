import { LightningElement, api, track } from 'lwc';
import {
  peel
} from 'c/util';

export default class MdcInput extends LightningElement {
  @track state = {};
  @api label ="Label";
  @api field = "field";
  @api type = "text";
  @api min = null;

  @api 
  get value() {
    return this.value;
  }
  set value(v) {
    if(!v) {
      v = "";
    }
    this.state.value = v;
  }

  handleChange(e) {
    const {field} = this;
    const value = e.target.value;
    this.state.value = value;
    const detail = {value,field};
    const event = {detail};
    // console.log(event)
    this.dispatchEvent(
      new CustomEvent('key',event)
    );
  }
}