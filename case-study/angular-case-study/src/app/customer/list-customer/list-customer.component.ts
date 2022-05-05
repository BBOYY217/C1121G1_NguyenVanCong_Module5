import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer/customer';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
customer:Customer[] = [
  {id:1,code:'KH-0001',name:'Tran Van A',birthday:'01/01/2022',gender:'nam',idCard:'123456789',phone:'091234567',email:'VanA@gmail.com',address:'DN',customerType:{id:1,name:'Diamond'}},
  {id:2,code:'KH-0001',name:'Tran Van A',birthday:'01/01/2022',gender:'nam',idCard:'123456789',phone:'091234567',email:'VanA@gmail.com',address:'DN',customerType:{id:1,name:'Diamond'}},
  {id:3,code:'KH-0001',name:'Tran Van A',birthday:'01/01/2022',gender:'nam',idCard:'123456789',phone:'091234567',email:'VanA@gmail.com',address:'DN',customerType:{id:1,name:'Diamond'}},
  {id:4,code:'KH-0001',name:'Tran Van A',birthday:'01/01/2022',gender:'nam',idCard:'123456789',phone:'091234567',email:'VanA@gmail.com',address:'DN',customerType:{id:1,name:'Diamond'}}
]
  constructor() { }

  ngOnInit(): void {
  }

}
