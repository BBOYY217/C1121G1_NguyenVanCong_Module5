import {CustomerType} from './customerType';

export interface Customer {
  id: number;
  code: string;
  name: string;
  birthday: string;
  gender: string;
  idCard: string;
  phone: string;
  email: string;
  address: string;
  customerType: CustomerType;
}
