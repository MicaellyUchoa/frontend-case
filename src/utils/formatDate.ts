import { isSameDay } from 'date-fns';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

function formatDate(date: string, formatMode: string) {
    const dateToFormat = new Date(date);

    return (
        (isSameDay(new Date(), dateToFormat) ? 'Hoje - ' : '') +
        format(new Date(new Date(dateToFormat.valueOf() + dateToFormat.getTimezoneOffset() * 60 * 1000)), formatMode, {
            locale: ptBR,
        })
    );
}

export default formatDate;
