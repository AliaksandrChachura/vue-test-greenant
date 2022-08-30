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
        path: '/catalog/:catId',
    },
    goods: {
        name: 'goods',
        path: '/catalog/:catId/:subcatId',
    },
  };
  
  export default {
    ROUTES,
  };