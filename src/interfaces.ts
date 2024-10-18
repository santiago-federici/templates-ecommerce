import type { SVGProps } from "react";

export interface Tag {
  name: string;
  className: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export interface Template {
  id: number;
  title: string;
  category: string;
  description: string;
  largeDescription: string;
  price: number;
  imageOne: string;
  imageTwo: string;
  imageThree: string;
  techStack: Tag[];
}
