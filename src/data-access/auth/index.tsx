import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import ToastError from '../../components/ToastError';
import { IAuthContextData } from '../../interfaces/IAuthContextData';
import { IUser } from '../../interfaces/IUser';

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider = (props: { children: JSX.Element }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState<{ user: string; token: string } | null>(null);

    useEffect(() => {
        const storagedUser = localStorage.getItem('user');
        const storagedToken = localStorage.getItem('token');
        if (storagedToken && storagedUser) {
            setUser({ user: 'user', token: 'token' });
        }
    }, []);

    async function MakeLogin(userData: IUser) {
        api.get(`/users`, { params: userData.user })
            .then(response => {
                if (response?.data[0]?.password !== userData.password || response?.data[0]?.user !== userData.user) {
                    return ToastError({ title: 'Usuário e/ou senha inválidos, tente novamente mais tarde!' });
                }
                setUser({ user: userData.user, token: 'token' });
                localStorage.setItem('user', userData.user);
                localStorage.setItem('token', 'Bearer jwtToken');
                navigate('/home', { replace: true });
            })
            .catch(error => {
                if (error) {
                    return ToastError({ title: 'Algo deu errado, tente novamente mais tarde!' });
                }
            });
    }

    function MakeLogout(): void {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

    return (
        <AuthContext.Provider
            value={{
                signed: Boolean(user),
                user,
                MakeLogin,
                MakeLogout,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}
