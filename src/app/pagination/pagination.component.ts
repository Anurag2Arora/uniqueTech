import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { EditComponent } from '../edit/edit.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements AfterViewInit {

 
  displayedColumns: string[] = ['username','creditref', 'balance', 'client','my','exposure','availablebal','ust','bst','default','account','casino','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }
  constructor(private dialog:MatDialog , private http:HttpClient){
    
  }
  opendialog(){
    this.dialog.open(EditComponent,{
      data:""
    })
  }

}
export interface PeriodicElement {
  
  username:string;
  creditref:string;
   balance:string;
    client:string;
    my:string;
    exposure:string;
    availablebal:string;
    ust:string;
    bst:string;
    default:string;
    account:string;
    casino:string;
    action:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { username:'anurag',creditref:'500',balance:'100',client:'2',my:'54',exposure:'85',availablebal:'22',ust:'5',bst:'7',default:'795',account:'45',casino:'lkl',action:'edit',},
  { username:'anurag',creditref:'500',balance:'100',client:'2',my:'54',exposure:'85',availablebal:'22',ust:'5',bst:'7',default:'795',account:'45',casino:'lkl',action:'edit',},
  { username:'anurag',creditref:'500',balance:'100',client:'2',my:'54',exposure:'85',availablebal:'22',ust:'5',bst:'7',default:'795',account:'45',casino:'lkl',action:'edit',},
  { username:'anurag',creditref:'500',balance:'100',client:'2',my:'54',exposure:'85',availablebal:'22',ust:'5',bst:'7',default:'795',account:'45',casino:'lkl',action:'edit',},
  { username:'anurag',creditref:'500',balance:'100',client:'2',my:'54',exposure:'85',availablebal:'22',ust:'5',bst:'7',default:'795',account:'45',casino:'lkl',action:'edit',},
  { username:'anurag',creditref:'500',balance:'100',client:'2',my:'54',exposure:'85',availablebal:'22',ust:'5',bst:'7',default:'795',account:'45',casino:'lkl',action:'edit',},
  { username:'anurag',creditref:'500',balance:'100',client:'2',my:'54',exposure:'85',availablebal:'22',ust:'5',bst:'7',default:'795',account:'45',casino:'lkl',action:'edit',},
  { username:'anurag',creditref:'500',balance:'100',client:'2',my:'54',exposure:'85',availablebal:'22',ust:'5',bst:'7',default:'795',account:'45',casino:'lkl',action:'edit',},
  { username:'anurag',creditref:'500',balance:'100',client:'2',my:'54',exposure:'85',availablebal:'22',ust:'5',bst:'7',default:'795',account:'45',casino:'lkl',action:'edit',},
  { username:'riya',creditref:'500',balance:'100',client:'2',my:'54',exposure:'85',availablebal:'22',ust:'5',bst:'7',default:'795',account:'45',casino:'lkl',action:'edit',},

  // {position: 2,username:'', name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  // {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  // {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  // {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  // {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  // {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  // {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  // {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  // {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  // {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  // {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];