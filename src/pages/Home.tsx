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
        { description: FilterEnum.ALL, selected: true },
        { description: FilterEnum.ENTRY, selected: false },
        { description: FilterEnum.EXIT, selected: false },
        { description: FilterEnum.FUTURE, selected: false },
    ]);

    useEffect(() => {
        setFilteredExtractList([]);
        if (RenderRef.current || reload) {
            RenderRef.current = false;
            setReload(false);
            setLoading(true);

            const controller = new AbortController();

            api.get(`/results`, { signal: controller.signal })
                .then(response => {
                    setExtractList(response.data);
                })
                .catch(error => {
                    if (error) {
                        ToastError({ title: 'A solicitação não obteve sucesso, tente novamente mais tarde!' });
                    }
                })
                .finally(() => {
                    setLoading(prevProp => !prevProp);
                    controller.abort();
                });
            return;
        }
    }, [reload]);

    useEffect(() => {
        useExtractFiltered({ search, extractList, setFilteredExtractList });
    }, [search]);

    useEffect(() => {
        useExtractFiltered({ statusItems, extractList, setFilteredExtractList });
    }, [statusItems]);

    const isExtractListShow = (): boolean => {
        return (
            (extractList.length > 0 && search === '') ||
            (filteredExtractList.length > 0 && search !== '') ||
            filteredExtractList.length > 0
        );
    };

    return (
        <>
            <div className="flex xs:flex-wrap-reverse lg:flex-nowrap items-center">
                <Tab items={statusItems} onChangeItems={setStatusItems} />
                <Search value={search} onChange={setSearch} />
            </div>
            {loading ? (
                <Loading />
            ) : isExtractListShow() ? (
                <ExtractList list={filteredExtractList.length > 0 ? filteredExtractList : extractList} />
            ) : (
                <Reload setReload={setReload} />
            )}
        </>
    );
}

export default Home;
