import config from '../config';
import Home from '../pages/Admin/Home';
import List from '../pages/List';
import Category from '../pages/Admin/Category';
import AddProduct from '../pages/Admin/AddProduct';
import Orders from '../pages/Admin/Orders';
import Users from '../pages/Admin/Users';

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
            path: config.routes.admin.users,
            component: List,
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
