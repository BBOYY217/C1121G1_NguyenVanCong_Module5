import {Education} from './education';
import {Positions} from './positions';
import {Division} from './division';

export interface Employee {
  id: number;
  name: string;
  birthday: string;
  idCard: string;
  phone: string;
  email: string;
  salary: number;
  education: Education;
  position: Positions;
  division: Division;
}
