import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  psize=5;
  cpage=1;
  
    data:any[]=[
      {id:"1",name:"Anurag",phone:"123",add:"haridwar"},
      {id:"2",name:"raman",phone:"1235",add:"delhi"},
      {id:"3",name:"Anju",phone:"12364",add:"hari"},
      {id:"4",name:"tiya",phone:"123514",add:"dwar"},
      {id:"5",name:"chunnu",phone:"12543",add:"noida"},
      {id:"6",name:"munnu",phone:"1253",add:"hari"},
      {id:"7",name:"mrigank",phone:"154523",add:"dwar"},
      {id:"8",name:"vishal",phone:"125143",add:"punjab"},
      {id:"9",name:"vaishali",phone:"125413",add:"jammu"},
      {id:"10",name:"shivani",phone:"12453",add:"kashmir"},
      {id:"11",name:"Anurag",phone:"123",add:"haridwar"},
      {id:"12",name:"raman",phone:"1235",add:"delhi"},
      {id:"13",name:"Anju",phone:"12364",add:"hari"},
      {id:"14",name:"tiya",phone:"123514",add:"dwar"},
      {id:"15",name:"chunnu",phone:"12543",add:"noida"},
      {id:"16",name:"munnu",phone:"1253",add:"hari"},
      {id:"17",name:"mrigank",phone:"154523",add:"dwar"},
      {id:"18",name:"vishal",phone:"125143",add:"punjab"},
      {id:"19",name:"vaishali",phone:"125413",add:"jammu"},
      {id:"20",name:"shivani",phone:"12453",add:"kashmir"},
    ]
  
}
