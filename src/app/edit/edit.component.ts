import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder ,Validators} from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
productForm !:FormGroup
  constructor(private formbuilder:FormBuilder,) { }

  ngOnInit(): void {
    this.productForm=this.formbuilder.group({
      name:["",Validators.required],
      weight:["",Validators.required]
    })
  }
  add(){
    console.log(this.productForm.value)
  }
  
}
