import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { IReloadProps } from '../../interfaces/IReloadProps';

let props: IReloadProps;
let component: RenderResult<typeof import('@testing-library/dom/types/queries'), HTMLElement, HTMLElement>;
import Reload from './index';

beforeEach(() => {
    props = {
        setReload: jest.fn(),
    };

    component = render(<Reload {...props} />);
});
describe('Reload Component', () => {
    test('should render with text', async () => {
        expect(component.getByText('Não encontramos nada por aqui, tente novamente mais tarde!')).toBeTruthy();
    });

    test('should render and reload page', async () => {
        const user = userEvent.setup();

        await user.click(component.getByTestId('reload'));

        expect(props.setReload).toBeCalledTimes(1);
    });
});
