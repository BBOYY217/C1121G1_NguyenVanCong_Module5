import {Component, OnInit} from '@angular/core';
import {Service} from '../../model/service/service';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  service: Service[] = [
    {id:1,name:'Villa',area:500,cost:1000,maxPeople:7,rentType:{id:1,name:'gio'},attachService:{id:1,name:'nuoc uong'}},
    {id:2,name:'Villa',area:500,cost:1000,maxPeople:7,rentType:{id:1,name:'gio'},attachService:{id:1,name:'nuoc uong'}},
    {id:3,name:'Villa',area:500,cost:1000,maxPeople:7,rentType:{id:1,name:'gio'},attachService:{id:1,name:'nuoc uong'}},
    {id:4,name:'Villa',area:500,cost:1000,maxPeople:7,rentType:{id:1,name:'gio'},attachService:{id:1,name:'nuoc uong'}}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
