import { useAuth, useRefreshToken } from '../../hooks';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
function PersistLogin() {
    const [isLoading, setIsLoading] = useState(true);

    return <h2>helo</h2>;
}

export default PersistLogin;
