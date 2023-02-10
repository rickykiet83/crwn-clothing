import { Product } from './product';

export interface Category {
  id: number;
  title: string;
  imageUrl: string;
  route: string;
}

export interface Categories {
  title: string;
  items: Product[];
}