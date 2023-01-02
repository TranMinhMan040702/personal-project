import config from '../config';
import Home from '../pages/Home';
import List from '../pages/List';

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
            component: Home,
        },
        {
            path: config.routes.admin.category,
            component: List,
        },
    ],
};

// require login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
