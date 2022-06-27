import { render, RenderResult } from '@testing-library/react';

import TabItem from './TabItem';
import { ITabItemProps } from '../../interfaces/ITabItemProps';
import { FilterEnum } from '../../enums/FilterEnum';

let props: ITabItemProps;
let component: RenderResult<typeof import('@testing-library/dom/types/queries'), HTMLElement, HTMLElement>;

beforeEach(() => {
    props = {
        selected: true,
        description: FilterEnum.ALL,
        onClick: jest.fn(),
    };
    component = render(<TabItem {...props} />);
});
describe('TabItem Component', () => {
    test('should style tab item when selected', async () => {
        expect(component.getByRole('button').classList).toContain('bg-c_primary');
        expect(component.getByRole('button').classList).toContain('hover:bg-pink-700');
        expect(component.getByRole('button').classList).toContain('text-white');
    });

    test('should style tab item when unselected', async () => {
        props.selected = false;

        component.rerender(<TabItem {...props} />);

        expect(component.getByRole('button').classList).toContain('hover:bg-c_secondary_light');
        expect(component.getByRole('button').classList).toContain('text-c_primary');
    });
});
