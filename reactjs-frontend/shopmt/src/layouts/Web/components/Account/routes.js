import Profile from './Profile';
import Password from './Password';
import Purchase from './Purchase';
import Address from './Address';
import Order from './Order';
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
        path: '/user/purchase/order',
        component: Order,
    },
];

export default routes;
