import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { Login } from '../pages/Login';
import { useAuth } from '../data-access/auth/AuthContext';

function RequireAuth(props: { children: JSX.Element }) {
    const { signed } = useAuth();

    return signed ? props.children : <Login />;
}

const RouteConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/home"
                    element={
                        <RequireAuth>
                            <Home />
                        </RequireAuth>
                    }
                />
                <Route
                    path="*"
                    element={
                        <RequireAuth>
                            <Home />
                        </RequireAuth>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteConfig;
