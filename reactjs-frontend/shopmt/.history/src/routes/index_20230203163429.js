import config from '../config';
import { AdminLayout, WebLayout } from '../layouts';
import Dashboard from '../pages/Admin/Dashboard';
import Category from '../pages/Admin/Category';
import AddProduct from '../pages/Admin/AddProduct';
import Orders from '../pages/Admin/Orders';
import OrdersDetail from '../pages/Admin/OrdersDetail';
import Users from '../pages/Admin/Users';
import Delivery from '../pages/Admin/Delivery';
import Product from '../pages/Admin/Product';

import Home from '../pages/Web/Home';
const publicRoutes = [
    // Route Admin
    {
        path: config.routes.admin.home,
        component: Dashboard,
        layout: AdminLayout,
    },
    {
        path: config.routes.admin.product,
        component: Product,
        layout: AdminLayout,
    },
    {
        path: config.routes.admin.addProduct,
        component: AddProduct,
        layout: AdminLayout,
    },
    {
        path: config.routes.admin.product + '/:id',
        component: AddProduct,
        layout: AdminLayout,
    },
    {
        path: config.routes.admin.category,
        component: Category,
        layout: AdminLayout,
    },
    {
        path: config.routes.admin.orders,
        component: Orders,
        layout: AdminLayout,
    },
    {
        path: config.routes.admin.ordersDetail,
        component: OrdersDetail,
        layout: AdminLayout,
    },
    {
        path: config.routes.admin.users,
        component: Users,
        layout: AdminLayout,
    },
    {
        path: config.routes.admin.delivery,
        component: Delivery,
        layout: AdminLayout,
    },
    {
        path: config.routes.admin.seller,
        component: Dashboard,
        layout: AdminLayout,
    },
    {
        path: config.routes.admin.transactions,
        component: Dashboard,
        layout: AdminLayout,
    },
    // Route web
    {
        path: config.routes.web.home,
        component: Home,
        layout: WebLayout,
    },
];

// require login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
