export interface OtherProductsType {
  link: string;
  title: string;
}

export interface ProductPageType {
  id: string;
  title: string;
  colors?: string[];
  slogan: string;
  description: string[];
  otherProducts: OtherProductsType[];
}
