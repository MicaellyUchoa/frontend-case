import Header from './Header';

interface ContainerPageProps {
    children: JSX.Element;
    title: string;
}

function ContainerPage({ children, title }: ContainerPageProps) {
    return (
        <div className="w-full flex flex-col justify-center items-center mb-20">
            <Header title={title} />
            <div className="w-full flex-wrap px-8 md:px-6 lg:px-36 py-5">{children}</div>
        </div>
    );
}
export default ContainerPage;
