import config from '../config';
import { WebLayout } from '../layouts';
import DashboardPage from '../layouts/Admin/components/Dashboard';
import CategoryPage from '../layouts/Admin/components/Category';
import AddProductPage from '../pages/Admin/AddProduct';
import OrderAdminPage from '../pages/Admin/Orders';
import OrderDetailPage from '../pages/Admin/OrdersDetail';
import UsersPage from '../pages/Admin/Users';
import DeliveryPage from '../pages/Admin/Delivery';
import ProductPage from '../pages/Admin/Product';

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
        component: DashboardPage,
        roles: ['ADMIN'],
    },
    {
        path: config.routes.admin.product,
        component: ProductPage,
        roles: ['ADMIN'],
    },
    {
        path: config.routes.admin.addProduct,
        component: AddProductPage,
        roles: ['ADMIN'],
    },
    {
        path: config.routes.admin.product + '/:id',
        component: AddProductPage,
        roles: ['ADMIN'],
    },
    {
        path: config.routes.admin.category,
        component: CategoryPage,
        roles: ['ADMIN'],
    },
    {
        path: config.routes.admin.orders,
        component: OrderAdminPage,
        roles: ['ADMIN'],
    },
    {
        path: config.routes.admin.ordersDetail,
        component: OrderDetailPage,
        roles: ['ADMIN'],
    },
    {
        path: config.routes.admin.users,
        component: UsersPage,
        roles: ['ADMIN'],
    },
    {
        path: config.routes.admin.delivery,
        component: DeliveryPage,
        roles: ['ADMIN'],
    },
    {
        path: config.routes.admin.seller,
        component: DashboardPage,
        roles: ['ADMIN'],
    },
    {
        path: config.routes.admin.transactions,
        component: DashboardPage,
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
    {
        path: config.routes.web.user + '/purchase/:slug',
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
        path: config.routes.web.productDetails + '/:id',
        component: ProductDetail,
        layout: WebLayout,
    },
];

export { publicRoutes, privateRoutes };
