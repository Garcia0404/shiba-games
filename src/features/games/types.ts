export type UUID = `${string}-${string}-${string}-${string}-${string}`;
export interface Game {
  uuid: UUID;
  title: string;
  provider: string;
  price: number;
  discount: number;
  description: string;
  category: string;
  image: string;
  trailer: string;
}
