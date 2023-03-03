import config from '../config';
import { WebLayout } from '../layouts';
import Dashboard from '../pages/Admin/Dashboard';
import Category from '../pages/Admin/Category';
import AddProduct from '../pages/Admin/AddProduct';
import Orders from '../pages/Admin/Orders';
import OrdersDetail from '../pages/Admin/OrdersDetail';
import Users from '../pages/Admin/Users';
import Delivery from '../pages/Admin/Delivery';
import Product from '../pages/Admin/Product';

import Home from '../pages/Web/Home';
import Cart from '../pages/Web/Cart';
import ProductDetail from '../pages/Web/Product';
import Checkout from '../pages/Web/Checkout';
import User from '../pages/Web/User';
import Login from '../pages/Web/Login';
import Register from '../pages/Web/Register';
const privateRoutes = [
    // Route Admin
    {
        path: config.routes.admin.home,
        component: Dashboard,
        roles: ['ADMIN'],
    },
    {
        path: config.routes.admin.product,
        component: Product,
        roles: ['ADMIN'],
    },
    {
        path: config.routes.admin.addProduct,
        component: AddProduct,
        roles: ['ADMIN'],
    },
    {
        path: config.routes.admin.product + '/:id',
        component: AddProduct,
        roles: ['ADMIN'],
    },
    {
        path: config.routes.admin.category,
        component: Category,
        roles: ['ADMIN'],
    },
    {
        path: config.routes.admin.orders,
        component: Orders,
        roles: ['ADMIN'],
    },
    {
        path: config.routes.admin.ordersDetail,
        component: OrdersDetail,
        roles: ['ADMIN'],
    },
    {
        path: config.routes.admin.users,
        component: Users,
        roles: ['ADMIN'],
    },
    {
        path: config.routes.admin.delivery,
        component: Delivery,
        roles: ['ADMIN'],
    },
    {
        path: config.routes.admin.seller,
        component: Dashboard,
        roles: ['ADMIN'],
    },
    {
        path: config.routes.admin.transactions,
        component: Dashboard,
        roles: ['ADMIN'],
    },
    // Route web
    // {
    //     path: config.routes.web.cart,
    //     component: Cart,
    //     layout: WebLayout,
    //     roles: ['USER'],
    // },

    {
        path: config.routes.web.checkout,
        component: Checkout,
        layout: WebLayout,
        roles: ['USER'],
    },
    {
        path: config.routes.web.user + '/:slug',
        component: User,
        layout: WebLayout,
        roles: ['USER'],
    },
];

const publicRoutes = [
    {
        path: config.routes.web.cart,
        component: Cart,
        layout: WebLayout,
        roles: ['USER'],
    },
    {
        path: config.routes.web.home,
        component: Home,
        layout: WebLayout,
    },
    {
        path: config.routes.web.login,
        component: Login,
        layout: WebLayout,
    },
    {
        path: config.routes.web.register,
        component: Register,
        layout: WebLayout,
    },
    {
        path: config.routes.web.productDetails,
        component: ProductDetail,
        layout: WebLayout,
    },
];

export { publicRoutes, privateRoutes };
