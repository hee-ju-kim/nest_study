import { Schema } from 'mongoose';

export const ItemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
},
{
  timestamps: true
});