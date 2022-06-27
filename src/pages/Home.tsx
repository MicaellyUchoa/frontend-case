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
import { FilterEnum } from '../enums/FilterEnum';
import Reload from '../components/Reload';

function Home() {
    const RenderRef = useRef(true);

    const [extractList, setExtractList] = useState<IExtract[]>([]);
    const [filteredExtractList, setFilteredExtractList] = useState<IExtract[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [reload, setReload] = useState<boolean>(false);
    const [search, setSearch] = useState<string>();
    const [statusItems, setStatusItems] = useState<ITab[]>([
        { description: FilterEnum.ALL, selected: false },
        { description: FilterEnum.ENTRY, selected: false },
        { description: FilterEnum.EXIT, selected: false },
        { description: FilterEnum.FUTURE, selected: false },
    ]);

    useEffect(() => {
        setFilteredExtractList([]);
        if (RenderRef.current || search !== undefined || reload) {
            RenderRef.current = false;
            setReload(false);
            setLoading(true);

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
                    setLoading(false);
                    controller.abort();
                });

            return;
        }
    }, [search, reload]);

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
            ) : filteredExtractList.length > 0 || extractList.length > 0 ? (
                <ExtractList list={filteredExtractList.length > 0 ? filteredExtractList : extractList} />
            ) : (
                <Reload setReload={setReload} />
            )}
        </>
    );
}

export default Home;
