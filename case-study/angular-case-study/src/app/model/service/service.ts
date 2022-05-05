import {RentType} from './rentType';
import {AttachService} from './attachService';

export interface Service {
  id: number;
  name: string;
  area: number;
  cost: number;
  maxPeople: number;
  rentType: RentType;
  attachService: AttachService;
}
