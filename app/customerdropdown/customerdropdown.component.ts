import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customerdropdown',
  templateUrl: './customerdropdown.component.html',
  styleUrls: ['./customerdropdown.component.css']
})
export class CustomerdropdownComponent implements OnInit {
  cus_id:number;
  customers=[
    new Customer(1,'salma','pathan','salma@gmail.com','55656','ygyg'),
    new Customer(2,'ayesha','pathan','salma@gmail.com','55656','ygyg'),
  
  ]
  constructor() {
    this.cus_id=0;
   }

  ngOnInit(): void {
  }

}
