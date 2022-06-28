import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { IHeaderProps } from '../../interfaces/IHeaderProps';

let props: IHeaderProps;
let component: RenderResult<typeof import('@testing-library/dom/types/queries'), HTMLElement, HTMLElement>;
import Header from './index';

beforeEach(() => {
    props = {
        title: 'Extrato',
    };

    component = render(<Header {...props} />);
});
describe('Header Component', () => {
    test('should render with title', async () => {
        expect(component.getByText('Extrato')).toBeTruthy();
    });

    test('should click on logout button', async () => {
        const user = userEvent.setup();

        await user.click(component.getByTestId('logout'));
    });
});
