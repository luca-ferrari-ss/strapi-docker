// Interface automatically generated by schemas-to-ts

import { Multimedia } from '../elements/Multimedia';
import { Multimedia_Plain } from '../elements/Multimedia';
import { Multimedia_NoRelations } from '../elements/Multimedia';

export enum BackgroundColor {
  Green = 'Green',
  LightGreen = 'Light green',
  Yellow = 'Yellow',
  Black = 'Black',
  Orange = 'Orange',}

export interface Media_04 {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  reverseColumnsOrder?: boolean;
  backgroundColor?: BackgroundColor;
  multimedia: Multimedia[];
}
export interface Media_04_Plain {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  reverseColumnsOrder?: boolean;
  backgroundColor?: BackgroundColor;
  multimedia: Multimedia_Plain[];
}

export interface Media_04_NoRelations {
  internalTitle?: string;
  blockId?: string;
  hide?: boolean;
  reverseColumnsOrder?: boolean;
  backgroundColor?: BackgroundColor;
  multimedia: Multimedia_NoRelations[];
}

