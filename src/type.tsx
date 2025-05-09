export interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  }

  export type Product = {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    images: string[];
    category: Category;
  };