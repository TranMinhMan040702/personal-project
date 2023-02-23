/* eslint-disable react-hooks/exhaustive-deps */
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
        console.log('hello');
        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
    }, []);

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`);
        console.log(`accessToken: ${auth?.accessToken}`);
    }, [isLoading]);
    return <>{isLoading ? <p>Loading....</p> : <Outlet />}</>;
}

export default PersistLogin;
