import { StatusEnum } from '../enums/StatusEnum';

//icons
import Received from '../assets/icons/received.svg';
import Refunded from '../assets/icons/refunded.svg';
import Schedule from '../assets/icons/schedule.svg';

interface useStatusIconProps {
    status: StatusEnum;
}
function useStatusIcon({ status }: useStatusIconProps): string {
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
        default:
            return Schedule;
    }
}

export default useStatusIcon;
