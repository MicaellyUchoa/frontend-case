import { renderHook } from '@testing-library/react';
import useDebounce from './index';

let props: { value: any; delay: number };

beforeEach(() => {
    props = {
        value: 'prev',
        delay: 500,
    };
    jest.useFakeTimers();
});
describe('useDebounce Hook', () => {
    test('should render hook', async () => {
        const { result } = renderHook(() => useDebounce('changed', props.delay));

        jest.setTimeout(props.delay);

        expect(result).toBeTruthy();
        expect(result.current).toBe('changed');
    });
});
