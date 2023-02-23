import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks';

function RequireAuth() {
    const { auth } = useAuth();
    console.log(auth);
    const location = useLocation();
    return auth?.email ? <Outlet /> : <Navigate to="login" state={{ from: location }} replace />;
}

export default RequireAuth;
