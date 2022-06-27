import { fireEvent, render, RenderResult, within } from '@testing-library/react';

import Tab from '.';
import { FilterEnum } from '../../enums/FilterEnum';
import { ITabProps } from '../../interfaces/ITabProps';

let props: ITabProps;
let component: RenderResult<typeof import('@testing-library/dom/types/queries'), HTMLElement, HTMLElement>;
beforeEach(() => {
    props = {
        items: [
            { description: FilterEnum.ALL, selected: true },
            { description: FilterEnum.ENTRY, selected: false },
            { description: FilterEnum.EXIT, selected: true },
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

    test('should render tab item components', async () => {
        props.items.forEach((e, i) => {
            expect(component.queryAllByTestId('tab-item')[i].textContent).toEqual(e.description);
        });
    });

    test('should render tab item components with ALL selected', async () => {
        props.items.forEach((e, i) => {
            if (e.description === FilterEnum.ALL) {
                let element = component.queryAllByTestId('tab-item')[i];

                fireEvent.click(element);

                component.rerender(<Tab {...props} />);
            }
        });
    });

    test('should render tab item components whit ALL unselect', async () => {
        props.items = [
            { description: FilterEnum.ALL, selected: false },
            { description: FilterEnum.ENTRY, selected: false },
            { description: FilterEnum.EXIT, selected: true },
            { description: FilterEnum.FUTURE, selected: false },
        ];

        component.rerender(<Tab {...props} />);

        props.items.forEach((e, i) => {
            if (e.description === FilterEnum.ALL) {
                let element = component.queryAllByTestId('tab-item')[i];

                fireEvent.click(element);

                component.rerender(<Tab {...props} />);
            }
        });
    });
});
