import { useEffect, useRef, useState } from 'react';

import { IExtract } from '../interfaces/IExtract';
import api from '../api';
import Header from '../components/Header';
import ToastError from '../components/ToastError';
import TabItem from '../components/TabItem';
import Search from '../components/Search';
import ExtractList from '../components/ExtractList';
import Loading from '../components/Loading';
import Tab from '../components/Tab';
import { ITab } from '../interfaces/ITab';

function Home() {
    const RenderRef = useRef(true);

    const [extractList, setExtractList] = useState<IExtract[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [search, setSearch] = useState<string>();
    const [statusItems, setStatusItems] = useState<ITab[]>([
        { description: 'Tudo', selected: false },
        { description: 'Entrada', selected: false },
        { description: 'Saída', selected: false },
        { description: 'Futuro', selected: false },
    ]);

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
        <div className="w-full flex-wrap px-8 md:px-36 py-5 ">
            <div className="flex xs:flex-wrap-reverse lg:flex-nowrap items-center">
                <Tab items={statusItems} onChangeItems={setStatusItems} />
                <Search value={search} onChange={setSearch} />
            </div>
            {loading ? <Loading /> : <ExtractList list={extractList} />}
        </div>
    );
}

export default Home;
