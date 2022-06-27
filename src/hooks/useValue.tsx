import { EntryEnum } from '../enums/EntryEnum';
import { StatusEnum } from '../enums/StatusEnum';
import formatMoney from '../utils/formatMoney';
import { useState, useEffect } from 'react';

interface useStatusIconProps {
    status: StatusEnum;
    entry: EntryEnum;
    value: number;
}
function useValue({ status, entry, value }: useStatusIconProps): JSX.Element {
    const handleStyleValue = (): string => {
        if (status === StatusEnum.REFUNDED) return 'text-c_grayscale line-through';
        switch (entry) {
            case EntryEnum.DEBIT:
                return 'text-c_primary';
            case EntryEnum.CREDIT:
                return 'text-c_secondary';
        }
    };

    const renderSignal = (): string | undefined => {
        if (status === StatusEnum.REFUNDED) return;
        switch (entry) {
            case EntryEnum.DEBIT:
                return ' - ';
            case EntryEnum.CREDIT:
                return ' + ';
        }
    };

    return (
        <p className={`${handleStyleValue()} sm:text-end`}>
            {renderSignal()}
            <span className={`${status !== StatusEnum.REFUNDED && 'font-black'}`}>{formatMoney(value)}</span>
        </p>
    );
}

export default useValue;
