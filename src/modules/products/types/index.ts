export interface IRate {
  rate: number; 
  count: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description:string;
  category: string;
  image: string;
  rating: IRate;
}

export interface IUpdateCartPayload {
  price: number;
  productId: number;
}

export interface ICart {
  totalPrice: number;
  products: number[];
}