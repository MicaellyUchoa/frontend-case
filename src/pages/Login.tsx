import { useNavigate } from 'react-router-dom';
import { useAuth } from '../data-access/auth/AuthContext';
import LogoCora from '../assets/images/logo.png';

export function Login() {
    const navigate = useNavigate();
    const { MakeLogin, signed } = useAuth();

    async function handleLogin() {
        await MakeLogin({
            user: 'mica',
            password: '123456',
        });
        signed && navigate('/home');
    }

    return (
        <div className="w-full h-screen bg-gray-300 flex flex-col justify-center items-center">
            <div className="mb-10 flex justify-center items-center">
                <img className="h-24 w-24 rounded-lg" src={LogoCora} alt="Logotipo Cora" />
            </div>

            <div className="justify-start w-80">
                <div className="mb-4">
                    <label className="text-gray-500">usuário</label>
                    <input className="w-full h-10 border-gray-100 rounded-md focus:outline-none p-2" />
                </div>
                <div className="mb-4">
                    <label className="text-gray-500">senha</label>
                    <input className="w-full h-10 border-gray-100 rounded-md focus:outline-none p-2" />
                </div>

                <button
                    onClick={handleLogin}
                    className="bg-gray-200 hover:bg-pink-600 focus:bg-pink-600 focus:text-gray-200 hover:text-gray-200 transition-colors w-full rounded-lg h-10 focus:outline-none "
                >
                    Entrar
                </button>
            </div>
        </div>
    );
}
