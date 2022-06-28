import { memo } from 'react';

//hooks
import useStatusControl from '../../hooks/useStatusControl';
import useStatusIcon from '../../hooks/useStatusIcon';
import useValue from '../../hooks/useValue';
import { IExtractItemProps } from '../../interfaces/IExtractItemProps';

import formatDate from '../../utils/formatDate';

function ExtractItem({ item }: IExtractItemProps) {
    return (
        <div className="w-full grid grid-cols-4 gap-4 xs:flex xs:flex-col sm:items-center sm:grid text-base">
            <div className="flex gap-4 items-center">
                <div className="w-8 h-8 bg-c_secondary_light rounded-full flex justify-center items-center">
                    <img className="h-4 w-4" src={useStatusIcon({ status: item.status })} alt={item.status} />
                </div>
                <p className="text-c_grayscale text-base">{item.actor}</p>
            </div>
            <p className="text-c_grayscale_medium text-base">
                {useStatusControl({ status: item.status, source: item.source, entry: item.entry })}
            </p>
            <p className="text-c_grayscale_medium text-base">{formatDate(item.dateEvent, "dd MMM yyyy '-' HH:mm")}</p>
            {useValue({ value: item.amount, status: item.status, entry: item.entry })}
        </div>
    );
}
export default memo(ExtractItem);
