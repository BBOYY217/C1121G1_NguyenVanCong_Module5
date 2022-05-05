import {Employee} from '../employee/employee';
import {Service} from '../service/service';
import {Customer} from '../customer/customer';

export interface Contract {
  id: number;
  code: string;
  customer: Customer;
  service: Service;
  employee: Employee;
  startDate: string;
  endDate: string;
  deposit: number;
}
