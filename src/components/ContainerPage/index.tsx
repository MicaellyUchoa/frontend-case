import { IContainerPageProps } from '../../interfaces/IContainerPageProps';
import Header from '../Header';

function ContainerPage({ children, title }: IContainerPageProps) {
    return (
        <div className="w-full flex flex-col justify-center items-center mb-20">
            <Header title={title} />
            <main className="w-full flex-wrap px-8 md:px-6 lg:px-36 py-5">{children}</main>
        </div>
    );
}
export default ContainerPage;
