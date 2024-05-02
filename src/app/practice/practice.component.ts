import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';




@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
  
  compo1 : boolean = true;
  compo2 : boolean = false;
  compo3 : boolean = false;
  
  /**
   *
   */
  constructor() {
  }

  com1(){
    this.compo1 = true;
    this.compo2 = false;
    this.compo3 = false;
    console.log(this.compo1,this.compo2,this.compo3);
  }

  com2(){
    this.compo1 = false;
    this.compo2 = true;
    this.compo3 = false;
    console.log(this.compo1,this.compo2,this.compo3);
  }

  com3(){
    this.compo1 = false;
    this.compo2 = false;
    this.compo3 = true;
    console.log(this.compo1,this.compo2,this.compo3);
  }



}

