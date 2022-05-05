import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ListFacilitiesComponent } from './facility/list-facilities/list-facilities.component';
import { DeleteFacilitiesComponent } from './facility/delete-facilities/delete-facilities.component';
import { EditFacilitiesComponent } from './facility/edit-facilities/edit-facilities.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { ListContractComponent } from './contract/list-contract/list-contract.component';
import { EditContractComponent } from './contract/edit-contract/edit-contract.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import { DeleteContractComponent } from './contract/delete-contract/delete-contract.component';
import { ListServiceComponent } from './service/list-service/list-service.component';
import { EditServiceComponent } from './service/edit-service/edit-service.component';
import { DeleteServiceComponent } from './service/delete-service/delete-service.component';
import { CreateServiceComponent } from './service/create-service/create-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ListFacilitiesComponent,
    DeleteFacilitiesComponent,
    EditFacilitiesComponent,
    ListEmployeeComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    CreateEmployeeComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    DeleteCustomerComponent,
    CreateCustomerComponent,
    ListContractComponent,
    EditContractComponent,
    CreateContractComponent,
    DeleteContractComponent,
    ListServiceComponent,
    EditServiceComponent,
    DeleteServiceComponent,
    CreateServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
