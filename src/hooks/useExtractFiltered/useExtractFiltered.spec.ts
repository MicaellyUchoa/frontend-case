import { renderHook, screen } from '@testing-library/react';
import { IUseExtractFilteredProps } from '../../interfaces/IUseExtractFilteredProps';
import { StatusEnum } from '../../enums/StatusEnum';
import { SourceEnum } from '../../enums/SourceEnum';
import { EntryEnum } from '../../enums/EntryEnum';
import useExtractFiltered from './index';
import { FilterEnum } from '../../enums/FilterEnum';

let props: IUseExtractFilteredProps;

beforeEach(() => {
    props = {
        extractList: [
            {
                date: '2021-01-15',
                amountTotal: 114080,
                items: [
                    {
                        status: StatusEnum.COMPLETED,
                        actor: 'Teste 1',
                        amount: 20000,
                        source: SourceEnum.TRANSFER,
                        type: 'EXTERNAL',
                        entry: EntryEnum.DEBIT,
                        scheduled: true,
                        dateEvent: '2021-01-15T00:00:00Z',
                    },
                ],
            },
            {
                date: '2021-01-15',
                amountTotal: 114080,
                items: [
                    {
                        status: StatusEnum.COMPLETED,
                        actor: 'Teste 2',
                        amount: 20000,
                        source: SourceEnum.TRANSFER,
                        type: 'EXTERNAL',
                        entry: EntryEnum.CREDIT,
                        scheduled: false,
                        dateEvent: '2021-01-15T00:00:00Z',
                    },
                ],
            },
            {
                date: '2021-01-15',
                amountTotal: 114080,
                items: [
                    {
                        status: StatusEnum.COMPLETED,
                        actor: 'Teste 3',
                        amount: 20000,
                        source: SourceEnum.TRANSFER,
                        type: 'EXTERNAL',
                        entry: EntryEnum.DEBIT,
                        scheduled: false,
                        dateEvent: '2021-01-15T00:00:00Z',
                    },
                ],
            },
        ],
        setFilteredExtractList: jest.fn(),
    };
    jest.useFakeTimers();
});
describe('useExtractFiltered Hook', () => {
    test('should render hook with results of search', async () => {
        const { result } = renderHook(() => useExtractFiltered({ ...props, search: 'Teste 1' }));

        expect(result).toBeTruthy();
        expect(result.current).toEqual([props.extractList[0]]);
    });
    test('should render hook without results of search', async () => {
        const { result } = renderHook(() => useExtractFiltered({ ...props, search: 'unlisted' }));

        expect(result).toBeTruthy();
        expect(result.current).toStrictEqual([]);
    });

    test('should render with search items (all extracts)', async () => {
        const { result } = renderHook(() =>
            useExtractFiltered({
                ...props,
                statusItems: [
                    { description: FilterEnum.ALL, selected: true },
                    { description: FilterEnum.ENTRY, selected: false },
                    { description: FilterEnum.EXIT, selected: false },
                    { description: FilterEnum.FUTURE, selected: false },
                ],
            }),
        );
        expect(result).toBeTruthy();
        expect(result.current.length).toBe(3);
    });

    test('should render with search items (entry extracts)', async () => {
        const { result } = renderHook(() =>
            useExtractFiltered({
                ...props,
                statusItems: [
                    { description: FilterEnum.ALL, selected: false },
                    { description: FilterEnum.ENTRY, selected: true },
                    { description: FilterEnum.EXIT, selected: false },
                    { description: FilterEnum.FUTURE, selected: false },
                ],
            }),
        );
        expect(result).toBeTruthy();
        expect(result.current).toEqual([props.extractList[1]]);
    });

    test('should render with search items (future extracts)', async () => {
        const { result } = renderHook(() =>
            useExtractFiltered({
                ...props,
                statusItems: [
                    { description: FilterEnum.ALL, selected: false },
                    { description: FilterEnum.ENTRY, selected: false },
                    { description: FilterEnum.EXIT, selected: false },
                    { description: FilterEnum.FUTURE, selected: true },
                ],
            }),
        );
        expect(result).toBeTruthy();
        expect(result.current).toEqual([props.extractList[0]]);
    });

    test('should render with search items (future extracts)', async () => {
        const { result } = renderHook(() =>
            useExtractFiltered({
                ...props,
                statusItems: [
                    { description: FilterEnum.ALL, selected: false },
                    { description: FilterEnum.ENTRY, selected: false },
                    { description: FilterEnum.EXIT, selected: true },
                    { description: FilterEnum.FUTURE, selected: false },
                ],
            }),
        );
        expect(result).toBeTruthy();
        expect(result.current).toEqual([props.extractList[0], props.extractList[2]]);
    });
});
