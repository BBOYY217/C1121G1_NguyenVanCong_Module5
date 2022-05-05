import { Component, OnInit } from '@angular/core';
import {Employee} from '../../model/employee/employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
employee:Employee[]= [
  {id: 1,name:'Nguyen Van A',birthday:'01/01/2001',idCard:'123456789',phone:'091234567',email:'VanA@gmail.com',salary:5000,education:{id:4,name:'sau dai hoc'},position:{id:1,name:'le tan'},division:{id:3,name:'phuc vu'}},
  {id: 2,name:'Nguyen Van A',birthday:'01/01/2001',idCard:'123456789',phone:'091234567',email:'VanA@gmail.com',salary:5000,education:{id:4,name:'sau dai hoc'},position:{id:1,name:'le tan'},division:{id:3,name:'phuc vu'}},
  {id: 3,name:'Nguyen Van A',birthday:'01/01/2001',idCard:'123456789',phone:'091234567',email:'VanA@gmail.com',salary:5000,education:{id:4,name:'sau dai hoc'},position:{id:1,name:'le tan'},division:{id:3,name:'phuc vu'}},
  {id: 4,name:'Nguyen Van A',birthday:'01/01/2001',idCard:'123456789',phone:'091234567',email:'VanA@gmail.com',salary:5000,education:{id:4,name:'sau dai hoc'},position:{id:1,name:'le tan'},division:{id:3,name:'phuc vu'}},
]
  constructor() { }

  ngOnInit(): void {
  }

}
