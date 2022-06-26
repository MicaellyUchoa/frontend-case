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
    const [color, setColor] = useState<string>('text-c_grayscale');
    const [isPositive, setIsPositive] = useState<boolean | undefined>();
    const [isThrough, setIsThrough] = useState<boolean>(false);

    useEffect(() => {
        if (status === StatusEnum.REFUNDED) {
            setIsThrough(true);
        }

        if (status !== StatusEnum.REFUNDED && entry === EntryEnum.CREDIT) {
            setIsPositive(true);
            setColor('text-c_secondary');
        }

        if (status !== StatusEnum.REFUNDED && entry === EntryEnum.DEBIT) {
            setIsPositive(false);
            setColor('text-c_primary');
        }
    }, []);

    return (
        <p className={`${color} ${isThrough && 'line-through'} sm:text-end`}>
            {isPositive !== undefined && isPositive ? ' + ' : ' - '}
            <span className={`${status !== StatusEnum.REFUNDED && 'font-black'}`}>{formatMoney(value)}</span>
        </p>
    );
}

export default useValue;
