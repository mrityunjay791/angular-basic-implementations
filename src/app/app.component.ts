import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor() {
   
  }

  public allowDrop(ev) {
    ev.preventDefault();
  }

  arr: any[] = [{id: new Date().getTime(), val: 1},{id: new Date().getTime(), val: 2},{id: new Date().getTime(), val: 3},{id: new Date().getTime(), val: 4}];
  
  public drag(ev, val) {
    console.log(ev);
    if(ev != undefined) {
      // ev.dataTransfer.setData("text3", ev.target.id);
      ev.dataTransfer.setData("text3", val);
    }
    
  }
  
  public drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text3");
    console.log('data: ',data);
    
    let jsonData = JSON.parse(data);
    console.log(jsonData);
    
    // var node = document.createElement("span");                 // Create a <li> node
    // var textnode = document.createTextNode('Load-'+jsonData.val);         // Create a text node
    // node.appendChild(textnode);
    // ev.target.appendChild(node);
    ev.target.appendChild(document.getElementById(data));
    // this.arr = [{id: new Date().getTime(), val: 1},{id: new Date().getTime(), val: 2},{id: new Date().getTime(), val: 3},{id: new Date().getTime(), val: 4}];
    

  }


  public renderData(): any[] {
    console.log('helllo...');
    return [1,2,3,4,5,6,7];
  }


  public isOpened: boolean = false;

  public openBillBoard() {
    this.isOpened = !this.isOpened;
  }



    /**
   * creates serialized string
   *
   * @private
   * @param {*} unSerializedInput : un serialized input
   * @returns {string} : serialized output
   *
   * @memberOf AppComponent
   */
  private getSerializedString(unSerializedInput: any): string {
    let serializedOutput: string = '';

    try {
      serializedOutput = JSON.stringify(unSerializedInput);
    }
    catch (ex) {
      serializedOutput = '';
    }

    return serializedOutput;
  }

}


