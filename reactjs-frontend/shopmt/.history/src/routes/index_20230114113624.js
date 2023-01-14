import config from '../config';
import Home from '../pages/Admin/Home';
import List from '../pages/List';
import Category from '../pages/Admin/Category';
import AddProduct from '../pages/Admin/AddProduct';
import Orders from '../pages/Admin/Orders';
import OrdersDetail from '../pages/Admin/OrdersDetail';
import Users from '../pages/Admin/Users';
import Delivery from '../pages/Admin/Delivery';

const publicRoutes = {
    admin: [
        {
            path: config.routes.admin.home,
            component: Home,
        },
        {
            path: config.routes.admin.product,
            component: List,
        },
        {
            path: config.routes.admin.addProduct,
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
            component: Orders,
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
            component: List,
        },
        {
            path: config.routes.admin.transactions,
            component: List,
        },
    ],
};

// require login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
