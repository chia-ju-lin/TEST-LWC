import { LightningElement } from 'lwc';

  
export default class UnitTest extends LightningElement {
  
     unitNumber;

  handleChange(event) {
    this.unitNumber = event.target.value;
  }
}