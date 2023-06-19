import { StaticImageData } from "next/image";

export interface Categories {
  img: StaticImageData;
  name: string;
  link: string;
}

export interface ProductDesc {
  img: StaticImageData;
  name: string;
  desc: string;
  link: string;
}
