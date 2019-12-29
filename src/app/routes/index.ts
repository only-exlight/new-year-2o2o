import { IRoute } from '@app/interfaces';
import { CreatePage, CreatePostcard } from '@app/pages/';
import { DonatePage } from '@app/pages/donate';

export const POSTCARD: IRoute = {
  component: CreatePostcard,
  path: '/:id'
};

export const CREATE_POSTCARD: IRoute = {
  component: CreatePage,
  path: '/create'
};

export const DONATE: IRoute = {
  component: DonatePage,
  path: '/donate'
};

export const ROUTES: IRoute[] = [POSTCARD, CREATE_POSTCARD, DONATE];
