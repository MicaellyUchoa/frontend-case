import { createContext, useState, useEffect, useContext } from 'react';

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
        setUser({ user: userData.user, token: 'token' });
        localStorage.setItem('user', userData.user);
        localStorage.setItem('token', 'token');
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
