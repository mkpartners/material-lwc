import { LightningElement, api, track } from 'lwc';

export default class MdcButtonIcon extends LightningElement {
  @track svgPath = 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z';
  @track disabled = false;

  @api
  set iconName(v) {
    const icons = new Map([
      ['utility:add','M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z'],
      ['utility:refresh','M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z'],
      ['utility:edit','M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z'],
      ['utility:confirm','M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z'],
      ['utility:clear','M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'],
      ['utility:left','M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z'],
      ['utility:right','M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z'],
      ['utility:down','M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z'],
      ['utility:up','M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z'],
      ['utility:trash','M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z'],
      ['utility:play','M8,5.14V19.14L19,12.14L8,5.14Z'],
      ['utility:forward','M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z'],
      ['utility:back','M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z'],
    ]);
    // console.log('this icon exists:',icons.has(v));
    if(icons.has(v)){
      this.svgPath = icons.get(v);
    }
  }

  get iconName() {
    return this.svgPath;
  }

  @api
  set isDisabled(v) {
    this.disabled = v;
  }

  get isDisabled() {
    return this.disabled;
  }

  get iconClass() {
    return !this.isDisabled ? 'mdc-icon' : 'mdc-icon disabled';
  }
}