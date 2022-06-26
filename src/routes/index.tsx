import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { Login } from '../pages/Login';
import { useAuth } from '../data-access/auth/AuthContext';
import ContainerPage from '../components/ContainerPage';

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
                            <ContainerPage title="Extrato">
                                <Home />
                            </ContainerPage>
                        </RequireAuth>
                    }
                />
                <Route
                    path="*"
                    element={
                        <RequireAuth>
                            <ContainerPage title="Extrato">
                                <Home />
                            </ContainerPage>
                        </RequireAuth>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteConfig;
