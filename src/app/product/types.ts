export interface OtherProductsType {
  href: string;
  name: string;
  imgSrc: string;
  id: number;
}

export interface ProductPageType {
  id: string;
  title: string;
  colors?: string[] | undefined;
  slogan: string;
  description: string[];
  characteristics: CharacteristicsItem[];
  otherProducts: OtherProductsType[];
  images: ImageItem[];
}

export interface ImageItem {
  color: string;
  srcList: string[];
}

export type CharacteristicsItem = CharacteristicsItemList | CharacteristicsItemString;

export interface CharacteristicsItemList {
  title: string;
  items: string[];
}

export interface CharacteristicsItemString {
  label: string;
  value: string;
}

export enum ColorsTypes {
  white = 'white',
  black = 'black',
}
