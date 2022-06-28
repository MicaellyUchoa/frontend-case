import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

let component: RenderResult<typeof import('@testing-library/dom/types/queries'), HTMLElement, HTMLElement>;

import { Login } from './index';

let mockUser = {
    user: 'usuario@usuario.com',
    password: 'usuario',
};

beforeEach(() => {
    component = render(<Login />);
});
describe('Login Page', () => {
    test('should functionality login with valid values', async () => {
        const user = userEvent.setup();
        await user.type(component.getByTestId('user'), mockUser.user);
        await user.type(component.getByTestId('password'), mockUser.password);
    });

    test('should functionality login with invalid values', async () => {
        const user = userEvent.setup();
        await user.click(screen.getByText('Entrar'));
    });
});
