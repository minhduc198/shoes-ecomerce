export interface IProduct {
  id: number;
  name: string;
  rate: number;
  review: number;
  price: number;
  sale_off: number;
  category: string;
  colors: string[];
  sizes: string[]
  quantity: number;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
    info: string;
    comment: string;
}

export interface ICategory {category: string,
      count: number
}