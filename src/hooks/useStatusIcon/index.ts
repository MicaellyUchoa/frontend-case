import { StatusEnum } from '../../enums/StatusEnum';

//icons
import Received from '../../assets/icons/received.svg';
import Refunded from '../../assets/icons/refunded.svg';
import Schedule from '../../assets/icons/schedule.svg';

import { IUseStatusIconProps } from '../../interfaces/IUseStatusIconProps';

function useStatusIcon({ status }: IUseStatusIconProps): string {
    switch (status) {
        case StatusEnum.COMPLETED: {
            return Received;
        }
        case StatusEnum.REFUNDED: {
            return Refunded;
        }
        case StatusEnum.PENDING: {
            return Schedule;
        }
    }
}

export default useStatusIcon;
