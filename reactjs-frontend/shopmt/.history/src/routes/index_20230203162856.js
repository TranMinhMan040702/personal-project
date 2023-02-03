import config from '../config';
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
    },
    {
        path: config.routes.admin.product,
        component: Product,
    },
    {
        path: config.routes.admin.addProduct,
        component: AddProduct,
    },
    {
        path: config.routes.admin.product + '/:id',
        component: AddProduct,
    },
    {
        path: config.routes.admin.category,
        component: Category,
    },
    {
        path: config.routes.admin.orders,
        component: Orders,
    },
    {
        path: config.routes.admin.ordersDetail,
        component: OrdersDetail,
    },
    {
        path: config.routes.admin.users,
        component: Users,
    },
    {
        path: config.routes.admin.delivery,
        component: Delivery,
    },
    {
        path: config.routes.admin.seller,
        component: Dashboard,
    },
    {
        path: config.routes.admin.transactions,
        component: Dashboard,
    },
    // Route web
    {
        path: config.routes.web.home,
        component: Home,
    },
];

// require login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
