import { useEffect, useRef, useState } from 'react';
import { IExtract } from '../interfaces/IExtract';
import api from '../api';
import Header from '../components/Header';
import ToastError from '../components/ToastError';

function Home() {
    const [extractList, setExtractList] = useState<IExtract[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const firstRenderRef = useRef(true);

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            if (loading) {
                const controller = new AbortController();

                api.get(`/results`, { signal: controller.signal })
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
            }
            return;
        }
    }, []);

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Header title="Extrato" />

            <div className="mt-10 w-full">
                {extractList.map((extract, indexExtract) => (
                    <div key={indexExtract} className="border-blue-500 border">
                        <div>{extract.amountTotal}</div>
                        <div>{extract.date}</div>
                        {extract.items.map((item, indexItem) => (
                            <div key={indexItem}>
                                <p>{item.actor}</p>
                                <p>{item.amount}</p>
                                <p>{item.dateEvent}</p>
                                <p>{item.entry}</p>
                                <p>{item.scheduled}</p>
                                <p>{item.source}</p>
                                <p>{item.status}</p>
                                <p>{item.type}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
