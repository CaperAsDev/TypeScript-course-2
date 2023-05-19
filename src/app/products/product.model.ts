//|In this file .model.ts we will keep all the type declarations of our App. Using export syntax we'll be able to use the declaration in the other files of our App.

import { Category } from '../categories/category.model';
import { BaseModel } from '../base.model';

type Sizes = 'S' | 'XS' | 'L' | 'M' | 'XL';
export interface ProductI extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Sizes;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}