import {Component, OnInit} from '@angular/core';
import {Contract} from '../../model/contract/contract';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {

  contract: Contract[] = [
    {
      id: 1,
      code: 'HD-0001',
      customer: {
        id: 1,
        code: 'KH-0001',
        name: 'Tran Van A',
        birthday: '01/01/2022',
        gender: 'nam',
        idCard: '123456789',
        phone: '091234567',
        email: 'VanA@gmail.com',
        address: 'DN',
        customerType: {id: 1, name: 'Diamond'}
      },
      service: {
        id: 1,
        name: 'Villa',
        area: 500,
        cost: 1000,
        maxPeople: 7,
        rentType: {id: 1, name: 'gio'},
        attachService: {id: 1, name: 'nuoc uong'}
      },
      employee: {
        id: 1,
        name: 'Nguyen Van A',
        birthday: '01/01/2001',
        idCard: '123456789',
        phone: '091234567',
        email: 'VanA@gmail.com',
        salary: 5000,
        education: {id: 4, name: 'sau dai hoc'},
        position: {id: 1, name: 'le tan'},
        division: {id: 3, name: 'phuc vu'}
      },
      startDate: '20/04/2022',
      endDate: '23/04/2022',
      deposit: 500
    },
    {
      id: 2,
      code: 'HD-0001',
      customer: {
        id: 1,
        code: 'KH-0001',
        name: 'Tran Van A',
        birthday: '01/01/2022',
        gender: 'nam',
        idCard: '123456789',
        phone: '091234567',
        email: 'VanA@gmail.com',
        address: 'DN',
        customerType: {id: 1, name: 'Diamond'}
      },
      service: {
        id: 1,
        name: 'Villa',
        area: 500,
        cost: 1000,
        maxPeople: 7,
        rentType: {id: 1, name: 'gio'},
        attachService: {id: 1, name: 'nuoc uong'}
      },
      employee: {
        id: 1,
        name: 'Nguyen Van A',
        birthday: '01/01/2001',
        idCard: '123456789',
        phone: '091234567',
        email: 'VanA@gmail.com',
        salary: 5000,
        education: {id: 4, name: 'sau dai hoc'},
        position: {id: 1, name: 'le tan'},
        division: {id: 3, name: 'phuc vu'}
      },
      startDate: '20/04/2022',
      endDate: '23/04/2022',
      deposit: 500
    },
    {
      id: 3,
      code: 'HD-0001',
      customer: {
        id: 1,
        code: 'KH-0001',
        name: 'Tran Van A',
        birthday: '01/01/2022',
        gender: 'nam',
        idCard: '123456789',
        phone: '091234567',
        email: 'VanA@gmail.com',
        address: 'DN',
        customerType: {id: 1, name: 'Diamond'}
      },
      service: {
        id: 1,
        name: 'Villa',
        area: 500,
        cost: 1000,
        maxPeople: 7,
        rentType: {id: 1, name: 'gio'},
        attachService: {id: 1, name: 'nuoc uong'}
      },
      employee: {
        id: 1,
        name: 'Nguyen Van A',
        birthday: '01/01/2001',
        idCard: '123456789',
        phone: '091234567',
        email: 'VanA@gmail.com',
        salary: 5000,
        education: {id: 4, name: 'sau dai hoc'},
        position: {id: 1, name: 'le tan'},
        division: {id: 3, name: 'phuc vu'}
      },
      startDate: '20/04/2022',
      endDate: '23/04/2022',
      deposit: 500
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
