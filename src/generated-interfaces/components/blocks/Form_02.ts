// Interface automatically generated by schemas-to-ts

export enum TextColor {
  Green = 'Green',
  LightGreen = 'Light green',
  Yellow = 'Yellow',
  Black = 'Black',
  Orange = 'Orange',}
export enum BackgroundColor {
  Green = 'Green',
  LightGreen = 'Light green',
  Yellow = 'Yellow',
  Black = 'Black',
  Orange = 'Orange',}

export interface Form_02 {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  textColor?: TextColor;
  backgroundColor?: BackgroundColor;
  text?: any;
}
export interface Form_02_Plain {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  textColor?: TextColor;
  backgroundColor?: BackgroundColor;
  text?: any;
}

export interface Form_02_NoRelations {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  textColor?: TextColor;
  backgroundColor?: BackgroundColor;
  text?: any;
}

