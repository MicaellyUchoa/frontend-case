import ExtractItem from './ExtractItem';
import { IExtract } from '../interfaces/IExtract';
import formatDate from '../utils/formatDate';
import formatMoney from '../utils/formatMoney';

interface ExtractListProps {
    list: IExtract[];
}

function ExtractList({ list }: ExtractListProps) {
    return (
        <div className="mt-10 w-full">
            <div className="justify-between px-4 xs:hidden sm:flex">
                <p />
                <p className="text-c_grayscale_medium text-sm">Tipo de transação</p>
                <p className="text-c_primary text-sm font-black">Data</p>
                <p className="text-c_grayscale_medium text-sm">Valor</p>
            </div>
            <div className="-mt-6">
                {list.map((extract, indexExtract) => (
                    <div key={indexExtract}>
                        <p className="text-c_grayscale font-bold text-xs px-4 py-2">
                            {formatDate(extract.date, "dd  'de' MMMM")}
                        </p>
                        <div className="border-c_grayscale_100  border-l h-5 mx-7"></div>
                        <div className="border-c_grayscale_100 border rounded-2xl px-4 py-7">
                            {extract.items.map((item, indexItem) => (
                                <ExtractItem item={item} key={indexItem} />
                            ))}
                        </div>
                        <div className="border-c_grayscale_100  border-l h-5 mx-7"></div>
                        <div className="flex justify-end">
                            <p className=" absolute text-c_grayscale text-xs mt-2 px-4">
                                saldo do dia <span className="font-bold"> {formatMoney(extract.amountTotal)}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ExtractList;
