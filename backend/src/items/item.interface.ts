import { Document } from 'mongoose';
import { BaseEntity } from '../common/interface/base.interface';

export interface Item extends Document, BaseEntity {
  _id: string; 
  name: string;
  description: string;
  price: number;
}