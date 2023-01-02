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
            path: '/list',
            component: List,
        },
    ],
};

// require login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
