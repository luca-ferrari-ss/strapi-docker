// Interface automatically generated by schemas-to-ts

import { Image } from '../components/elements/Image';
import { Seo } from '../components/shared/Seo';
import { Image_Plain } from '../components/elements/Image';
import { Seo_Plain } from '../components/shared/Seo';
import { Image_NoRelations } from '../components/elements/Image';
import { Seo_NoRelations } from '../components/shared/Seo';

export interface Page {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    title?: string;
    slug?: string;
    coverImage?: Image;
    seo?: Seo;
    blocks?: any;
    locale: string;
    localizations?: { data: Page[] };
  };
}
export interface Page_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  slug?: string;
  coverImage?: Image_Plain;
  seo?: Seo_Plain;
  blocks?: any;
  locale: string;
  localizations?: Page_Plain[];
}

export interface Page_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  slug?: string;
  coverImage?: Image_NoRelations;
  seo?: Seo_NoRelations;
  blocks?: any;
  locale: string;
  localizations?: Page[];
}

export interface Page_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  slug?: string;
  coverImage?: Image_Plain;
  seo?: Seo_Plain;
  blocks?: any;
  locale: string;
  localizations?: Page[];
}
