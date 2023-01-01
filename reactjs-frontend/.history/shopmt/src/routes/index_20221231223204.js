import Home from '../pages/Home';
import List from '../pages/List';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
];

// require login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
