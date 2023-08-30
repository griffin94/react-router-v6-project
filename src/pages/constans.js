export const ROUTES = {
  ABOUT: 'ABOUT',
  DETAILS: 'DETAILS',
  HOME: 'HOME',
  HOST: 'HOST',
  HOST_DASHBOARD: 'HOST_DASHBOARD',
  HOST_INCOME: 'HOST_INCOME',
  HOST_REVIEWS: 'HOST_REVIEWS',
  HOST_VAN: 'HOST_VAN',
  HOST_VAN_DETAILS: 'HOST_VAN_DETAILS',
  HOST_VAN_PHOTOS: 'PHOTOS',
  HOST_VAN_PRICING: 'PRICING',
  HOST_VANS: 'HOST_VANS',
  VAN: 'VAN',
  VANS: 'VANS',
};

export const PATHS = {
  [ROUTES.ABOUT]: 'about',
  [ROUTES.DETAILS]: '',
  [ROUTES.HOME]: '/',
  [ROUTES.HOST]: 'host',
  [ROUTES.HOST_DASHBOARD]: '',
  [ROUTES.HOST_INCOME]: 'income',
  [ROUTES.HOST_REVIEWS]: 'reviews',
  [ROUTES.HOST_VANS]: 'vans',
  [ROUTES.HOST_VAN]: ':id',
  [ROUTES.HOST_VAN_DETAILS]: '',
  [ROUTES.HOST_VAN_PHOTOS]: 'photos',
  [ROUTES.HOST_VAN_PRICING]: 'pricing',
  [ROUTES.VAN]: ':id',
  [ROUTES.VANS]: 'vans',
};

export const NAMES = {
  [ROUTES.ABOUT]: 'About',
  [ROUTES.DETAILS]: 'Details',
  [ROUTES.HOME]: 'Home',
  [ROUTES.HOST]: 'Host',
  [ROUTES.HOST_DASHBOARD]: 'Dashboard',
  [ROUTES.HOST_INCOME]: 'Income',
  [ROUTES.HOST_REVIEWS]: 'Reviews',
  [ROUTES.HOST_VAN_PHOTOS]: 'Photos',
  [ROUTES.HOST_VANS]: 'Vans',
  [ROUTES.HOST_VAN_DETAILS]: 'Details',
  [ROUTES.HOST_VAN_PRICING]: 'Pricing',
  [ROUTES.VANS]: 'Vans',
};

export const MAIN_NAV = [
  {
    path: PATHS[ROUTES.HOME],
    name: NAMES[ROUTES.HOME],
  },
  {
    path: PATHS[ROUTES.ABOUT],
    name: NAMES[ROUTES.ABOUT],
  },
  {
    path: PATHS[ROUTES.HOST],
    name: NAMES[ROUTES.HOST],
  },
  {
    path: PATHS[ROUTES.VANS],
    name: NAMES[ROUTES.VANS],
  },
];

export const HOST_NAV = [
  {
    path: PATHS[ROUTES.HOST_DASHBOARD],
    name: NAMES[ROUTES.HOST_DASHBOARD],
  },
  {
    path: PATHS[ROUTES.HOST_INCOME],
    name: NAMES[ROUTES.HOST_INCOME],
  },
  {
    path: PATHS[ROUTES.HOST_REVIEWS],
    name: NAMES[ROUTES.HOST_REVIEWS],
  },
  {
    path: PATHS[ROUTES.HOST_VANS],
    name: NAMES[ROUTES.HOST_VANS],
  },
];

export const HOST_VAN_NAV = [
  {
    path: PATHS[ROUTES.HOST_VAN_DETAILS],
    name: NAMES[ROUTES.HOST_VAN_DETAILS],
  },
  {
    name: NAMES[ROUTES.HOST_VAN_PHOTOS],
    path: PATHS[ROUTES.HOST_VAN_PHOTOS],
  },
  {
    path: PATHS[ROUTES.HOST_VAN_PRICING],
    name: NAMES[ROUTES.HOST_VAN_PRICING],
  },
];
