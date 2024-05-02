import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compo3',
  templateUrl: './compo3.component.html',
  styleUrls: ['./compo3.component.css']
})
export class Compo3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
data=[
  {id:1,name:"anurag",phone:123},
  {id:2,name:"chunnu",phone:123},
  {id:3,name:"anurag",phone:123},
  {id:4,name:"anurag",phone:123}
]
}
