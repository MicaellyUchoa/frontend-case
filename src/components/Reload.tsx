import { IReloadProps } from '../interfaces/IReloadProps';

function Reload({ setReload }: IReloadProps) {
    return (
        <div className="w-full my-24 flex flex-col gap-10 justify-center items-center">
            <p className="text-c_grayscale_medium text-lg text-center">
                Não encontramos nada por aqui, tente novamente mais tarde!
            </p>
            <button className="bg-c_primary text-white p-4 rounded-xl" onClick={() => setReload(true)}>
                Regarregar
            </button>
        </div>
    );
}
export default Reload;
