import { render, fireEvent, createEvent } from '@testing-library/react';

import Search from './Search';

describe('Search Component', () => {
    const setup = () => {
        const utils = render(<Search value="search" onChange={() => {}} />);
        const input = utils.getByLabelText('inputSearch');
        return {
            input,
            ...utils,
        };
    };
    test('should render placeholder on input', async () => {
        const { getByPlaceholderText } = render(<Search value="search" onChange={() => {}} />);
        expect(getByPlaceholderText('Pesquisar')).toBeTruthy();
    });

    test('should render value on input', async () => {
        const { getByPlaceholderText } = render(<Search value="search" onChange={() => {}} />);
        expect(getByPlaceholderText('Pesquisar')).toHaveAttribute('value', 'search');
    });

    it('should changed value', () => {
        const { input } = setup();

        fireEvent.change(input, { target: { value: 'changed' } });

        expect(input).toHaveAttribute('value', 'changed');
    });
});
