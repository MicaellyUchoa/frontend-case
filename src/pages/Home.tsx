import { useEffect, useRef, useState } from 'react';

import { IExtract } from '../interfaces/IExtract';
import api from '../api';
import Header from '../components/Header';
import ToastError from '../components/ToastError';
import TabItem from '../components/TabItem';
import Search from '../components/Search';
import ExtractList from '../components/ExtractList';
import Loading from '../components/Loading';

function Home() {
    const [extractList, setExtractList] = useState<IExtract[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [search, setSearch] = useState<string>();
    const [status, setStatus] = useState<string>('');
    const RenderRef = useRef(true);

    useEffect(() => {
        setLoading(true);
        if (RenderRef.current || search !== undefined) {
            RenderRef.current = false;

            const controller = new AbortController();

            api.get(`/results`, { signal: controller.signal, params: { q: search } })
                .then(response => {
                    setExtractList(response.data);
                    setLoading(prevProp => !prevProp);
                })
                .catch(error => {
                    setLoading(prevProp => !prevProp);
                    if (error) {
                        ToastError({ title: 'A solicitação não obteve sucesso, tente novamente mais tarde!' });
                    }
                })
                .finally(() => {
                    controller.abort();
                });

            return;
        }
    }, [search]);

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Header title="Extrato" />
            <div className="w-full flex-wrap px-8 md:px-36 py-5 ">
                <div className="flex xs:flex-wrap-reverse lg:flex-nowrap items-center">
                    <div className="flex xs:gap-1 md:gap-8 my-4 lg:mr-10">
                        <TabItem description="Tudo" selected></TabItem>
                        <TabItem description="Entrada"></TabItem>
                        <TabItem description="Saída"></TabItem>
                        <TabItem description="Futuro"></TabItem>
                    </div>
                    <Search value={search} onChange={setSearch} />
                </div>
                {loading ? <Loading /> : <ExtractList list={extractList} />}
            </div>
        </div>
    );
}

export default Home;
