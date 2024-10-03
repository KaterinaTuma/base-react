export type Card = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type CardsProps = {
  cards: Card[];
};
