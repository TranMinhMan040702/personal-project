import config from '../config';
import { WebLayout, ForgotPasswordLayout } from '../layouts';
import DashboardPage from '../layouts/Admin/components/Dashboard';
import CategoryPage from '../layouts/Admin/components/Category';
import AddProductPage from '../pages/Admin/AddProduct';
import OrderAdminPage from '../pages/Admin/Orders';
import OrderDetailPage from '../pages/Admin/OrdersDetail';
import UsersPage from '../pages/Admin/Users';
import DeliveryPage from '../pages/Admin/Delivery';
import ProductPage from '../pages/Admin/Product';

import HomePage from '../pages/Web/Home';
import CartPage from '../pages/Web/Cart';
import ProductDetailPage from '../pages/Web/Product';
import CheckoutPage from '../pages/Web/Checkout';
import UserPage from '../pages/Web/User';
import Login from '../pages/Web/Login';
import Register from '../pages/Web/Register';
import SetPasswordNewPage from '../pages/Web/SetPasswordNew';
import ForgotPasswordPage from '../pages/Web/ForgotPassword';

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
        path: config.routes.admin.orders + '/:slug',
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
    {
        path: config.routes.web.cart,
        component: CartPage,
        layout: WebLayout,
        roles: ['USER'],
    },
    {
        path: config.routes.web.checkout,
        component: CheckoutPage,
        layout: WebLayout,
        roles: ['USER'],
    },
    {
        path: config.routes.web.user + '/:slug',
        component: UserPage,
        layout: WebLayout,
        roles: ['USER'],
    },
    {
        path: config.routes.web.user + '/purchase/:slug',
        component: UserPage,
        layout: WebLayout,
        roles: ['USER'],
    },
    {
        path: config.routes.web.reset,
        component: ForgotPasswordPage,
        layout: ForgotPasswordLayout,
        roles: ['USER'],
    },
    {
        path: config.routes.web.reset + ':slug',
        component: ForgotPasswordPage,
        layout: ForgotPasswordLayout,
        roles: ['USER'],
    },
];

const publicRoutes = [
    {
        path: config.routes.web.forgotPassword,
        component: SetPasswordNewPage,
        layout: ForgotPasswordLayout,
        roles: ['USER'],
    },
    {
        path: config.routes.web.home,
        component: HomePage,
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
        path: config.routes.web.register + '/:slug',
        component: Register,
        layout: WebLayout,
    },
    {
        path: config.routes.web.productDetails + '/:id',
        component: ProductDetailPage,
        layout: WebLayout,
    },
];

export { publicRoutes, privateRoutes };
