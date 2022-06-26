import { createContext, useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import api from '../../api';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    MakeLogin(user: object): Promise<void>;
    MakeLogout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = (props: { children: JSX.Element }) => {
    const [user, setUser] = useState<{ user: string; token: string } | null>(null);

    useEffect(() => {
        const storagedUser = localStorage.getItem('user');
        const storagedToken = localStorage.getItem('token');
        if (storagedToken && storagedUser) {
            setUser({ user: 'user', token: 'token' });
        }
    }, []);

    async function MakeLogin(userData: { user: string; password: string }) {
        //TODO validate login
        api.get(`/users`, { params: userData })
            .then(response => {
                setUser({ user: userData.user, token: 'token' });
                localStorage.setItem('user', userData.user);
                localStorage.setItem('token', 'token');
            })
            .catch(error => {
                if (error) {
                    return toast.error('Usuário e/ou senha inválidos, tente novamente mais tarde!', {
                        position: 'top-right',
                        autoClose: 1000,
                        closeOnClick: true,
                        pauseOnHover: true,
                    });
                }
                return;
            });
    }

    function MakeLogout() {
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
