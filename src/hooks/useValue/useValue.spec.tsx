import { renderHook } from '@testing-library/react';
import { StatusEnum } from '../../enums/StatusEnum';
import useValue from './index';
import { EntryEnum } from '../../enums/EntryEnum';
describe('useValue Hook', () => {
    test('should call with status (refunded)', async () => {
        const { result } = renderHook(() =>
            useValue({
                status: StatusEnum.REFUNDED,
                entry: EntryEnum.CREDIT,
                value: 9000,
            }),
        );

        expect(result.current).toMatchSnapshot();
    });

    describe('useValue Hook (entry)', () => {
        test('should call with entry (debit)', async () => {
            const { result } = renderHook(() =>
                useValue({
                    status: StatusEnum.COMPLETED,
                    entry: EntryEnum.DEBIT,
                    value: 9000,
                }),
            );

            expect(result.current).toMatchSnapshot();
        });
        test('should call with entry (credit)', async () => {
            const { result } = renderHook(() =>
                useValue({
                    status: StatusEnum.COMPLETED,
                    entry: EntryEnum.CREDIT,
                    value: 9000,
                }),
            );

            expect(result.current).toMatchSnapshot();
        });
    });
});
