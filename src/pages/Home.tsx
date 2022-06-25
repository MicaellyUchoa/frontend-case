import { useAuth } from '../data-access/auth/AuthContext';
import '../styles/App.css';

function Home() {
    const { MakeLogout } = useAuth();

    async function handleLogout() {
        MakeLogout();
    }

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <button
                className="bg-gray-100 p-3 rounded-md hover:bg-gray-400 transition-colors mt-10"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
}

export default Home;
