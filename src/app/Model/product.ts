import { Categories } from './categories';

export class Product {
  id!: number;
  title!: string;
  price!: number;
  description!: string;
  category!: Categories;
  image!: string;
  rating!: { rate: number; count: number };
}
