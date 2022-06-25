import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './data-access/auth/AuthContext';
import './styles/index.css';
import './styles/App.css';

import RouteConfig from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthProvider>
            <RouteConfig />
        </AuthProvider>
    </React.StrictMode>,
);
