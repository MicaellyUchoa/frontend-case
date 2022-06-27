import { useEffect, useRef, useState } from 'react';

import api from '../api';

import { IExtract } from '../interfaces/IExtract';
import { ITab } from '../interfaces/ITab';

import ToastError from '../components/ToastError';
import Search from '../components/Search';
import ExtractList from '../components/ExtractList';
import Loading from '../components/Loading';
import Tab from '../components/Tab';

import useExtractFiltered from '../hooks/useExtractFiltered';

function Home() {
    const RenderRef = useRef(true);

    const [extractList, setExtractList] = useState<IExtract[]>([]);
    const [filteredExtractList, setFilteredExtractList] = useState<IExtract[]>([]);
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
        setFilteredExtractList([]);
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

    useEffect(() => {
        useExtractFiltered({ statusItems, extractList, setFilteredExtractList });
    }, [statusItems]);

    return (
        <>
            <div className="flex xs:flex-wrap-reverse lg:flex-nowrap items-center">
                <Tab items={statusItems} onChangeItems={setStatusItems} />
                <Search value={search} onChange={setSearch} />
            </div>
            {loading ? (
                <Loading />
            ) : (
                <ExtractList list={filteredExtractList.length > 0 ? filteredExtractList : extractList} />
            )}
        </>
    );
}

export default Home;
