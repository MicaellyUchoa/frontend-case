import { render, RenderResult, fireEvent, screen } from '@testing-library/react';

import Tab from './Tab';
import { FilterEnum } from '../../enums/FilterEnum';
import { ITabProps } from '../../interfaces/ITabProps';

let props: ITabProps;
let component: RenderResult<typeof import('@testing-library/dom/types/queries'), HTMLElement, HTMLElement>;
beforeEach(() => {
    props = {
        items: [
            { description: FilterEnum.ALL, selected: true },
            { description: FilterEnum.ENTRY, selected: false },
            { description: FilterEnum.EXIT, selected: false },
            { description: FilterEnum.FUTURE, selected: false },
        ],
        onChangeItems: () => {},
    };
    component = render(<Tab {...props} />);
});
describe('Tab Component', () => {
    test('should render tab item components', async () => {
        expect(component.getAllByRole('button').length).toBe(4);
    });
});
