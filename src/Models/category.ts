import { DocumentData } from 'firebase/firestore';
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

export function mapCategories(data: DocumentData): Categories[] {
  return data.map((cat: DocumentData) => {
    const categories: Categories = {
      items: cat.items,
      title: cat.title,
    };
    return categories;
  });
}