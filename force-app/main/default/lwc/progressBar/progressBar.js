import { LightningElement, api, track } from "lwc";
export default class ProgressBar extends LightningElement {
  @api progress = 0;
  @api tickRate = 10;
  
  @track startingPoint = 0;
  @track stoppingPoint = 100;
  @track progressing = false;
  @track lightning = false;
  @track html = false;
  @track material = true;
  @track transform = '';

  @api
  set startAt(v) {
    this.startingPoint = v;
  }

  get startAt() {
    return this.startingPoint;
  }

  @api
  set stopAt(v) {
    // console.log('stop at setter is being called',v);    
    this.stoppingPoint = v;
  }

  get stopAt() {
    return this.stoppingPoint;
  }

  @api
  set isProgressing(v) {
    // console.log('is progressing setter is being called',v)
    this.progressing = v;
    this.toggleProgress();
  }

  get isProgressing() {
    return this.progressing;
  }

  // get animation(){
  //   return `animation: mdc-linear-progress-primary-indeterminate-translate 1s infinite linear; 
  //   animation-duration: 1s;
  //   animation-timing-function: linear;
  //   animation-delay: 0s;
  //   animation-iteration-count: infinite;
  //   animation-direction: normal;
  //   animation-fill-mode: none;
  //   animation-play-state: running;
  //   animation-name: mdc-linear-progress-primary-indeterminate-translate;`;
  // }

  connectedCallback(){
    this.toggleProgress();
  }

  toggleProgress() {
    // console.log('toggling progress')
    this.progress = this.startingPoint;
    const time = 50; // tuning with functions to reduce time but lack of precision causes too many problems
    if (!this.progressing) {
      // console.log('not progressing')
      clearInterval(this._interval);
    } else {
      // console.log('progressing')
      // eslint-disable-next-line lwc/no-set-interval
      this._interval = setInterval(() => {
        if (this.progress === this.stoppingPoint) {
          // console.log('start at',this.startingPoint,'stop at',this.stoppingPoint)
          // console.log('progress at stop',this.progress)
          this.disconnectedCallback();
          this.progressing = false;
          this.dispatchEvent(new CustomEvent('stopprogressing'));
        } else {
          if(this.stoppingPoint > this.startingPoint) {
            this.progress = this.progress + this.tickRate <= this.stoppingPoint ? this.progress + this.tickRate : this.stoppingPoint;
          } else {
            this.progress = this.progress - this.tickRate <= this.stoppingPoint ? this.progress - this.tickRate : this.stoppingPoint;
          }
          this.transform = 'transform: scaleX('+this.progress/100+')';
        }
      }, time);
    }
  }

  disconnectedCallback() {
    // it's needed for the case the component gets disconnected
    // and the progress is being increased
    // this code doesn't show in the example
    clearInterval(this._interval);
  }

  toggleHandler() {
  }

}