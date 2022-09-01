export const ROUTES = {
    authentication: {
        name: 'authentication',
        path: '/',
    },
    categories: {
        name: 'categories',
        path: '/catalog',
    },
    subCategories: {
        name: 'subCategories',
        path: ':catId',
    },
    goods: {
        name: 'goods',
        path: ':catId/:subcatId',
    },
  };
  
  export default {
    ROUTES,
  };