import { useAuth } from '../data-access/auth/AuthContext';
import { TbLogout } from 'react-icons/tb';

function Header(props: { title: string }) {
    const { MakeLogout } = useAuth();

    async function handleLogout() {
        MakeLogout();
    }
    return (
        <header className="flex justify-between w-full items-center px-36 py-3">
            <p className="text-xl font-bold">{props.title}</p>

            <button className="flex gap-2 outline-none" onClick={handleLogout}>
                <p className="text-sm font-bold">sair</p>
                <TbLogout className="cursor-pointer" size={20} />
            </button>
        </header>
    );
}

export default Header;
