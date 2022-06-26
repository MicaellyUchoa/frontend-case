import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteConfig from './routes';

//context api
import { AuthProvider } from './data-access/auth/AuthContext';

//toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

//styles
import './styles/index.css';
import './styles/App.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ToastContainer />
        <AuthProvider>
            <RouteConfig />
        </AuthProvider>
    </React.StrictMode>,
);
