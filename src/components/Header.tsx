import { useAuth } from '../data-access/auth/AuthContext';
import { TbLogout } from 'react-icons/tb';

interface HeaderProps {
    title: string;
}

function Header({ title }: HeaderProps) {
    const { MakeLogout } = useAuth();

    return (
        <header className="flex justify-between w-full items-center px-8 md:px-36 py-5 border-b-2 border-gray-100">
            <p className="text-xl font-black">{title}</p>

            <button className="flex gap-2 outline-none" onClick={MakeLogout}>
                <p className="text-sm font-medium">sair</p>
                <TbLogout className="cursor-pointer" size={20} />
            </button>
        </header>
    );
}

export default Header;
