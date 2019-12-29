import { IRoute } from '@app/interfaces';
import { Postcard, CreatePostcard } from '@app/pages/';
import { DonatePage } from '@app/pages/donate';

export const POSTCARD: IRoute = {
  component: Postcard,
  path: '/:id',
};

export const CREATE_POSTCARD: IRoute = {
  component: CreatePostcard,
  path: '/create',
};

export const DONATE: IRoute = {
  component: DonatePage,
  path: '/donate/:id',
};

export const ROUTES: IRoute[] = [CREATE_POSTCARD, DONATE, POSTCARD];
