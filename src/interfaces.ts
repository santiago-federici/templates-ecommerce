import type { SVGProps } from "react";

export interface Tag {
  name: string;
  className: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export interface Screenshots {
  one: string;
  two: string;
  three: string;
  four: string;
}
export interface Thumbnails {
  one: string;
  two: string;
  three: string;
}
export interface Template {
  id: number;
  title: string;
  category: string;
  shortDescription: string;
  mediumDescription: string;
  largeDescription: string[];
  price: number;
  techStack: Tag[];
  image: string;
  thumbnails: Thumbnails;
  screenshots: Screenshots;
}
