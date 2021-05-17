import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-show',
  templateUrl: './customer-show.component.html',
  styleUrls: ['./customer-show.component.css']
})
export class CustomerShowComponent implements OnInit {

  customers=[
    new Customer(1,'salma','pathan','salma@gmail.com','55656','ygyg'),
    new Customer(2,'ayesha','pathan','salma@gmail.com','55656','ygyg'),
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
