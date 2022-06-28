import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteConfig from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

//context api
import { AuthProvider } from './data-access/auth';

//toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

//styles
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ToastContainer />
        <Router>
            <AuthProvider>
                <RouteConfig />
            </AuthProvider>
        </Router>
    </React.StrictMode>,
);
