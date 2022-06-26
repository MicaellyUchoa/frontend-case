import Header from './Header';

interface ContainerPageProps {
    children: JSX.Element;
    title: string;
}

function ContainerPage({ children, title }: ContainerPageProps) {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Header title={title} />
            {children}
        </div>
    );
}
export default ContainerPage;