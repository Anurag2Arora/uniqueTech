import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  isOn: boolean = false;

  constructor() { 
  
  }

  ngOnInit(): void {
    
  }

  toggleState() {
      this.isOn = !this.isOn;
  }
  

}
