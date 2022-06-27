import { render, fireEvent, createEvent } from '@testing-library/react';

import Search from '.';

let props: any;
beforeEach(() => {
    props = {
        value: 'search',
        onChange: () => {},
    };
});
describe('Search Component', () => {
    const setup = () => {
        const utils = render(<Search {...props} />);
        const input = utils.getByLabelText('inputSearch');
        return {
            input,
            ...utils,
        };
    };
    test('should render placeholder on input', async () => {
        const { getByPlaceholderText } = render(<Search {...props} />);
        expect(getByPlaceholderText('Pesquisar')).toBeTruthy();
    });

    test('should render value on input', async () => {
        const { getByPlaceholderText } = render(<Search {...props} />);
        expect(getByPlaceholderText('Pesquisar')).toHaveAttribute('value', 'search');
    });

    it('should changed value', () => {
        const { input } = setup();

        fireEvent.change(input, { target: { value: 'changed' } });

        expect(input).toHaveAttribute('value', 'changed');
    });
});
