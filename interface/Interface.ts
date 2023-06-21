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

export interface SubProductDesc {
  goBackLink: string;
  img: StaticImageData;
  name: string;
  desc: string;
  price: number;
  features1: string;
  features2: string;
  inTheBox: InTheBox[];
  gal1: StaticImageData;
  gal2: StaticImageData;
  gal3: StaticImageData;
  ad1: StaticImageData;
  ad1Name: string;
  ad1Link: string;
  ad2: StaticImageData;
  ad2Name: string;
  ad2Link: string;
  ad3: StaticImageData;
  ad3Name: string;
  ad3Link: string;
}

export interface InTheBox {
  amount: string;
  item: string;
}

export interface AudiofileState {
  mobileMenu: boolean;
  cartIsVisible: boolean;
}
