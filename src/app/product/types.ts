export interface OtherProductsType {
  link: string;
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
  images: string[];
}

export interface MultiColorImage {
  // : string[]
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
