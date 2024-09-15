// Interface automatically generated by schemas-to-ts

import { Media } from '../common/Media';
import { Media_Plain } from '../common/Media';
import { AdminPanelRelationPropertyModification } from '../common/AdminPanelRelationPropertyModification';

export interface FormSubmission {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    email?: string;
    toEmail?: string;
    formName?: string;
    formData?: any;
    attachment?: { data: Media };
  };
}
export interface FormSubmission_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  email?: string;
  toEmail?: string;
  formName?: string;
  formData?: any;
  attachment?: Media_Plain;
}

export interface FormSubmission_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  email?: string;
  toEmail?: string;
  formName?: string;
  formData?: any;
  attachment?: number;
}

export interface FormSubmission_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  email?: string;
  toEmail?: string;
  formName?: string;
  formData?: any;
  attachment?: AdminPanelRelationPropertyModification<Media_Plain>;
}
