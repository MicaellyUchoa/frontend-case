import { render, RenderResult } from '@testing-library/react';

import { IContainerPageProps } from '../../interfaces/IContainerPageProps';

import ContainerPage from './index';

let props: IContainerPageProps;
let component: RenderResult<typeof import('@testing-library/dom/types/queries'), HTMLElement, HTMLElement>;

beforeEach(() => {
    props = {
        title: 'Extrato',
        children: (
            <div>
                <p>page loaded</p>
            </div>
        ),
    };
    component = render(<ContainerPage {...props} />);
});
describe('Container Component', () => {
    test('should render title components', async () => {
        expect(component.findByText(props.title)).toBeTruthy();
    });

    test('should render children', () => {
        expect(component.getByText('page loaded')).toBeInTheDocument();
    });
});
