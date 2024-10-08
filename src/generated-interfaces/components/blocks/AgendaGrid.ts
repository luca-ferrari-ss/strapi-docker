// Interface automatically generated by schemas-to-ts

export enum BackgroundColor {
  Green = 'Green',
  LightGreen = 'Light green',
  Yellow = 'Yellow',
  Black = 'Black',
  Orange = 'Orange',}
export enum CardsTextColor {
  Green = 'Green',
  LightGreen = 'Light green',
  Yellow = 'Yellow',
  Black = 'Black',
  Orange = 'Orange',}
export enum CardsBackgroundColor {
  Green = 'Green',
  LightGreen = 'Light green',
  Yellow = 'Yellow',
  Black = 'Black',
  Orange = 'Orange',}

export interface AgendaGrid {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  backgroundColor?: BackgroundColor;
  cardsTextColor?: CardsTextColor;
  cardsBackgroundColor?: CardsBackgroundColor;
}
export interface AgendaGrid_Plain {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  backgroundColor?: BackgroundColor;
  cardsTextColor?: CardsTextColor;
  cardsBackgroundColor?: CardsBackgroundColor;
}

export interface AgendaGrid_NoRelations {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  backgroundColor?: BackgroundColor;
  cardsTextColor?: CardsTextColor;
  cardsBackgroundColor?: CardsBackgroundColor;
}

