import { renderHook } from '@testing-library/react';
import { StatusEnum } from '../../enums/StatusEnum';
import { SourceEnum } from '../../enums/SourceEnum';
import { EntryEnum } from '../../enums/EntryEnum';
import useStatusControl from './index';

describe('useStatusControl Hook', () => {
    describe('should call with complete status', () => {
        test('should call with search items (source payment and entry debit)', async () => {
            const { result } = renderHook(() =>
                useStatusControl({
                    entry: EntryEnum.DEBIT,
                    source: SourceEnum.PAYMENT,
                    status: StatusEnum.COMPLETED,
                }),
            );

            expect(result.current).toEqual('Pagamento Realizado');
        });

        test('should call with search items (source transfer and antry debit)', async () => {
            const { result } = renderHook(() =>
                useStatusControl({
                    entry: EntryEnum.DEBIT,
                    source: SourceEnum.TRANSFER,
                    status: StatusEnum.COMPLETED,
                }),
            );

            expect(result.current).toEqual('Transferência Realizada');
        });

        test('should call with search items (source payment and antry credit)', async () => {
            const { result } = renderHook(() =>
                useStatusControl({
                    entry: EntryEnum.CREDIT,
                    source: SourceEnum.PAYMENT,
                    status: StatusEnum.COMPLETED,
                }),
            );

            expect(result.current).toEqual('Pagamento Recebido');
        });
        test('should call with search items (source transfer and antry credit)', async () => {
            const { result } = renderHook(() =>
                useStatusControl({
                    entry: EntryEnum.CREDIT,
                    source: SourceEnum.TRANSFER,
                    status: StatusEnum.COMPLETED,
                }),
            );

            expect(result.current).toEqual('Transferência Recebida');
        });
    });

    describe('should call with refunded status', () => {
        test('should call with search items (source payment and entry debit)', async () => {
            const { result } = renderHook(() =>
                useStatusControl({
                    entry: EntryEnum.CREDIT,
                    source: SourceEnum.PAYMENT,
                    status: StatusEnum.REFUNDED,
                }),
            );

            expect(result.current).toEqual('Pagamento Estornado');
        });

        test('should call with search items (source transfer and antry credit)', async () => {
            const { result } = renderHook(() =>
                useStatusControl({
                    entry: EntryEnum.CREDIT,
                    source: SourceEnum.TRANSFER,
                    status: StatusEnum.REFUNDED,
                }),
            );

            expect(result.current).toEqual('Pagamento Estornado');
        });
    });

    describe('should call with pending status', () => {
        test('should call with search items (source payment and entry debit)', async () => {
            const { result } = renderHook(() =>
                useStatusControl({
                    entry: EntryEnum.DEBIT,
                    source: SourceEnum.PAYMENT,
                    status: StatusEnum.PENDING,
                }),
            );

            expect(result.current).toEqual('Pagamento Agendado');
        });

        test('should call with search items (source transfer and antry debit)', async () => {
            const { result } = renderHook(() =>
                useStatusControl({
                    entry: EntryEnum.DEBIT,
                    source: SourceEnum.TRANSFER,
                    status: StatusEnum.PENDING,
                }),
            );

            expect(result.current).toEqual('Pagamento Agendado');
        });
    });

    test('should call with search items (default)', async () => {
        const { result } = renderHook(() =>
            useStatusControl({
                entry: EntryEnum.CREDIT,
                source: SourceEnum.TRANSFER,
                status: StatusEnum.PENDING,
            }),
        );

        expect(result.current).toEqual('Pagamento não realizado');
    });
});
