export interface Tag {
  name: string;
  className: string;
  icon: JSX.Element;
}

export interface Screenshots {
  one: string;
  two: string;
  three: string;
}

export interface Price {
  amount: number;
  currency: string;
  discount?: number;
}

export interface Template {
  id: number;
  title: string;
  category: string;
  shortDescription: string;
  mediumDescription: string;
  largeDescription: string[];
  price: Price;
  techStack: Tag[];
  thumbnail: string;
  screenshots: Screenshots;
  preview?: string;
}
