import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {BodyComponent} from './body/body.component';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';
import {ListContractComponent} from './contract/list-contract/list-contract.component';
import {ListServiceComponent} from './service/list-service/list-service.component';
import {ListFacilitiesComponent} from './facility/list-facilities/list-facilities.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';


const routes: Routes = [
  {path:"list-customer",component:ListCustomerComponent},
  {path:"create-customer",component:CreateCustomerComponent},
  {path:"list-employee",component:ListEmployeeComponent},
  {path:"list-service",component:ListServiceComponent},
  {path:"list-contract",component:ListContractComponent},
  {path:"list-facilities",component:ListFacilitiesComponent},
  {path:"", component: BodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
