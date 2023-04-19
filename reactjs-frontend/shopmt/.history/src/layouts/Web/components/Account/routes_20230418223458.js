import Profile from './Profile';
import Password from './Password';
import Purchase from './Purchase';
import Address from './Address';
import Order from './Order';
import ProductLike from './ProductLike';
import Review from './Review';
const routes = [
    {
        path: '/user/profile',
        component: Profile,
    },
    {
        path: '/user/address',
        component: Address,
    },
    {
        path: '/user/password',
        component: Password,
    },
    {
        path: '/user/purchase',
        component: Purchase,
    },
    {
        path: '/user/product-like',
        component: ProductLike,
    },
    {
        path: '/user/purchase/order',
        component: Order,
    },
    {
        path: '/user/review',
        component: Review,
    },
];

export default routes;
