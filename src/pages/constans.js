export const ROUTES = {
  ABOUT: 'ABOUT',
  DETAILS: 'DETAILS',
  HOME: 'HOME',
  PHOTOS: 'PHOTOS',
  PRICING: 'PRICING',
  VAN: 'VAN',
  VANS: 'VANS',
};

export const PATHS = {
  [ROUTES.ABOUT]: '/about',
  [ROUTES.DETAILS]: '',
  [ROUTES.HOME]: '/',
  [ROUTES.PHOTOS]: 'photos',
  [ROUTES.PRICING]: 'pricing',
  [ROUTES.VAN]: '/vans/:id',
  [ROUTES.VANS]: '/vans',
};

export const NAMES = {
  [ROUTES.ABOUT]: 'About',
  [ROUTES.DETAILS]: 'Details',
  [ROUTES.HOME]: 'Home',
  [ROUTES.PHOTOS]: 'Photos',
  [ROUTES.PRICING]: 'Pricing',
  [ROUTES.VANS]: 'Vans',
};

export const MAIN_NAV = [
  {
    path: PATHS[ROUTES.ABOUT],
    name: NAMES[ROUTES.ABOUT],
  },
  {
    path: PATHS[ROUTES.HOME],
    name: NAMES[ROUTES.HOME],
  },
  {
    path: PATHS[ROUTES.VANS],
    name: NAMES[ROUTES.VANS],
  },
];

export const VAN_NAV = [
  {
    path: PATHS[ROUTES.DETAILS],
    name: NAMES[ROUTES.DETAILS],
  },
  {
    path: PATHS[ROUTES.PHOTOS],
    name: NAMES[ROUTES.PHOTOS],
  },
  {
    path: PATHS[ROUTES.PRICING],
    name: NAMES[ROUTES.PRICING],
  },
];
