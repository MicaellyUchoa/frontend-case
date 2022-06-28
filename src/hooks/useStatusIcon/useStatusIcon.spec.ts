import { renderHook } from '@testing-library/react';
import { StatusEnum } from '../../enums/StatusEnum';
import useStatusIcon from './index';
import Received from '../../assets/icons/received.svg';
import Refunded from '../../assets/icons/refunded.svg';
import Schedule from '../../assets/icons/schedule.svg';
describe('useStatusIcon Hook', () => {
    test('should call with status (completed)', async () => {
        const { result } = renderHook(() =>
            useStatusIcon({
                status: StatusEnum.COMPLETED,
            }),
        );

        expect(result.current).toEqual(Received);
    });

    test('should call with status (refunded)', async () => {
        const { result } = renderHook(() =>
            useStatusIcon({
                status: StatusEnum.REFUNDED,
            }),
        );

        expect(result.current).toEqual(Refunded);
    });

    test('should call with status (pending)', async () => {
        const { result } = renderHook(() =>
            useStatusIcon({
                status: StatusEnum.PENDING,
            }),
        );

        expect(result.current).toEqual(Schedule);
    });
});
