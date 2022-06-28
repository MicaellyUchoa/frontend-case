import ExtractItem from '../ExtractItem';
import formatDate from '../../utils/formatDate';
import formatMoney from '../../utils/formatMoney';
import { IExtractListProps } from '../../interfaces/IExtractListProps';

function ExtractList({ list }: IExtractListProps) {
    return (
        <div className="mt-10 w-full">
            <div className="w-full grid grid-cols-4 gap-4 px-4 xs:hidden sm:grid">
                <p />
                <p className="text-c_grayscale_medium text-sm">Tipo de transação</p>
                <p className="text-c_primary text-sm font-black">Data</p>
                <p className="text-c_grayscale_medium text-sm text-end">Valor</p>
            </div>
            <div className="-mt-6">
                {list.map((extract, indexExtract) => (
                    <div key={indexExtract}>
                        <p className="text-c_grayscale font-bold text-xs px-4 py-2">
                            {formatDate(extract.date, "dd  'de' MMMM")}
                        </p>
                        <div className="border-c_grayscale_100  border-l h-5 mx-7"></div>
                        <div className="border-c_grayscale_100 border rounded-2xl px-4 py-7 flex flex-col gap-7">
                            {extract.items.map((item, indexItem) => (
                                <div
                                    key={indexItem}
                                    className="last:border-none xs:border-b-2 sm:border-none xs:border-c_grayscale_light xs:pb-4 sm:pb-0"
                                >
                                    <ExtractItem item={item} />
                                </div>
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
