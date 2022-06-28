import { EntryEnum } from '../../enums/EntryEnum';
import { SourceEnum } from '../../enums/SourceEnum';
import { StatusEnum } from '../../enums/StatusEnum';
import { IUseStatusControlProps } from '../../interfaces/IUseStatusControlProps';

//TODO test here
function useStatusControl({ status, source, entry }: IUseStatusControlProps): string {
    switch (status) {
        case StatusEnum.COMPLETED: {
            if (source === SourceEnum.PAYMENT && entry === EntryEnum.DEBIT) {
                return 'Pagamento Realizado';
            }
            if (source === SourceEnum.TRANSFER && entry === EntryEnum.DEBIT) {
                return 'Transferência Realizada';
            }
            if (source === SourceEnum.PAYMENT && entry === EntryEnum.CREDIT) {
                return 'Pagamento Recebido';
            }
            if (source === SourceEnum.TRANSFER && entry === EntryEnum.CREDIT) {
                return 'Transferência Recebida';
            }
        }
        case StatusEnum.REFUNDED: {
            if (source === SourceEnum.PAYMENT && entry === EntryEnum.CREDIT) {
                return 'Pagamento Estornado';
            }
            if (source === SourceEnum.TRANSFER && entry === EntryEnum.CREDIT) {
                return 'Pagamento Estornado';
            }
        }
        case StatusEnum.PENDING: {
            if (source === SourceEnum.PAYMENT && entry === EntryEnum.DEBIT) {
                return 'Pagamento Agendado';
            }
            if (source === SourceEnum.TRANSFER && entry === EntryEnum.DEBIT) {
                return 'Transferência Agendada';
            }
        }
        default:
            return 'Pagamento não realizado';
    }
}

export default useStatusControl;
