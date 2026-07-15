export interface Variant {
  id: string;
  name: string;
  image: string;
  quantity: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;

  image: string;

  price: number;
  compareAtPrice?: number;

  badge?: string;

  learnMore?: string;

  variants: Variant[];
}