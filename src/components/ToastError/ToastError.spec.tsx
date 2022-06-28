import { renderHook } from '@testing-library/react';
import { IToastErrorProps } from '../../interfaces/IToastErrorProps';
import ToastError from './index';

let props: IToastErrorProps;

beforeEach(() => {
    props = {
        title: 'message',
    };
});
describe('Toast Error Component', () => {
    test('should render toast with title', async () => {
        renderHook(() => ToastError(props));
    });
});
