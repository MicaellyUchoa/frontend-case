import { isSameDay } from 'date-fns';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

function formatDate(date: string, formatMode: string) {
    const dateForFormat = new Date(date);

    return (
        (isSameDay(new Date(), dateForFormat) ? 'Hoje - ' : '') +
        format(
            new Date(new Date(dateForFormat.valueOf() + dateForFormat.getTimezoneOffset() * 60 * 1000)),
            formatMode,
            {
                locale: ptBR,
            },
        )
    );
}

export default formatDate;
