export type Category =
  | "filler"
  | "party game"
  | "cards"
  | "war game"
  | "euro"
  | "american"
  | "kids"
  | "management"
  | "investigatives"
  | "cooperative";

export interface Game {
  id?: string;
  image: string;
  name: string;
  playTime: number;
  minPlayer: number;
  maxPlayer: number;
  playerAge: number;
  description: string;
  categories: Category[];
  show_in_home?: boolean;
}
