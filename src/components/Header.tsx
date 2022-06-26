import { useAuth } from '../data-access/auth/AuthContext';
import { TbLogout } from 'react-icons/tb';

function Header(props: { title: string }) {
    const { MakeLogout } = useAuth();

    async function handleLogout() {
        MakeLogout();
    }
    return (
        <header className="flex justify-between w-full items-center px-8 md:px-36 py-5 border-b-2 border-gray-100">
            <p className="text-xl font-black">{props.title}</p>

            <button className="flex gap-2 outline-none" onClick={handleLogout}>
                <p className="text-sm font-medium">sair</p>
                <TbLogout className="cursor-pointer" size={20} />
            </button>
        </header>
    );
}

export default Header;