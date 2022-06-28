import { render, RenderResult, waitFor, fireEvent } from '@testing-library/react';
import { IUser } from '../../interfaces/IUser';
import { Login } from '../../pages/Login';

import * as AppContext from './index';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { IAuthContextData } from '../../interfaces/IAuthContextData';
import { act } from 'react-dom/test-utils';

describe('useExtractFiltered Hook', () => {
    let mockUser = {
        user: 'usuario@usuario.com',
        password: 'password',
    };

    let component: RenderResult<typeof import('@testing-library/dom/types/queries'), HTMLElement, HTMLElement>;
    let contextValues: IAuthContextData;

    beforeEach(() => {
        contextValues = {
            signed: false,
            user: { user: 'usuario1@usuario.com', password: 'password' },
            MakeLogin: (user: IUser) => Promise.resolve(),
            MakeLogout: () => Promise.resolve(),
        };

        jest.spyOn(AppContext, 'useAuth').mockImplementation(() => contextValues);
        component = render(
            <Router>
                <AppContext.AuthProvider>
                    <Login />
                </AppContext.AuthProvider>
            </Router>,
        );
    });

    describe('it should mock the context', () => {
        test('should call login', async () => {
            const user = userEvent.setup();
            const makeLoginSpy = jest.spyOn(contextValues, 'MakeLogin');

            act(() => {
                user.type(component.getByTestId('user'), mockUser.user);
                user.type(component.getByTestId('password'), mockUser.password);

                fireEvent.submit(component.getByText('Entrar'), contextValues.MakeLogin(mockUser));
            });

            await waitFor(() => expect(makeLoginSpy).toHaveBeenCalledWith(mockUser));
        });
    });
});
