import { useAuth, useRefreshToken } from '../../hooks';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
function PersistLogin() {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };
        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(true);
    });
    return <h2>helo</h2>;
}

export default PersistLogin;
