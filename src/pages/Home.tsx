import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { IExtract } from '../interfaces/IExtract';
import api from '../api';
import Header from '../components/Header';

function Home() {
    const [extractList, setExtractList] = useState<IExtract[]>([]);
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            if (!mounted) {
                api.get(`/results`)
                    .then(response => {
                        setExtractList(response.data);
                    })
                    .catch(error => {
                        if (error) {
                            return toast.error('A solicitação não obteve sucesso, tente novamente mais tarde!', {
                                position: 'top-right',
                                autoClose: 1000,
                                closeOnClick: true,
                                pauseOnHover: true,
                            });
                        }
                        return;
                    });
                return () => setMounted(prev => !prev);
            }
        })();
    }, []);

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Header title="Extrato" />

            <div className="mt-10 w-full">
                {extractList.map(extract => (
                    <div className="border-blue-500 border">
                        <div>{extract.amountTotal}</div>
                        <div>{extract.date}</div>
                        {extract.items.map(item => (
                            <div>
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
