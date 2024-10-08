import React, { useEffect, useState, useCallback } from 'react';
import { Card, Button } from '@material-ui/core';
//React Adapter -> unable to properly npm link @lab/shared, so movd it into project
import { ReactAdapter } from './ReactAdapter';

type TCard = {
    id: number;
    name: string;
    status: string;
};

type ResponseData = {
    activeCrossers: Array<TCard>;
    inactiveCrossers: Array<TCard>;
};

function WrappedLegacy() {
    const [loading, setLoading] = useState(true);
    const [cards, setCards] = useState<Array<TCard>>([]);

    console.log('legacy-react-craco: ', React.version);

    const fetchCards = useCallback(async () => {
        const response = await (
            (await fetch(`${window.location.origin}/crossers`, { method: 'GET' })).json() as Promise<ResponseData>
        ).catch((error) => console.error(error));

        if (response) {
            setCards(() => [...response.activeCrossers, ...response.inactiveCrossers]);
        }
        setLoading(false);
    }, [setCards, setLoading]);

    const handleSwitch = useCallback(
        async (id: string) => {
            const response = (await fetch(`${window.location.origin}/switch/${id}`, { method: 'POST' }).catch((error) =>
                console.error(error)
            )) as Response;

            if (response?.ok) {
                fetchCards();
            }
        },
        [fetchCards]
    );

    useEffect(() => {
        fetchCards();
    }, [fetchCards]);

    const LegacyCard: React.FC<TCard> = ({ name, status, id }) => {
        return (
            <Card>
                <section className='flex flex-col text-center' style={{ padding: 24 }}>
                    <span style={{ fontSize: 14, color: status === 'crossed' ? 'green' : 'red' }}>
                        <b>{status}</b>
                    </span>
                    <span className='p-2'>
                        <b style={{ fontSize: 18 }}>{name}</b>
                    </span>
                </section>
            </Card>
        );
    };

    if (loading)
        return (
            <div
                className='flex flex-col flex-grow items-center justify-center w-full text-3xl'
                style={{ height: 750 }}
            >
                ...Loading
            </div>
        );

    return (
        <div className='flex flex-col flex-grow items-center justify-center w-full' style={{ height: 750 }}>
            <div className='flex flex-row'>
                {' '}
                {cards.map((card) => {
                    return (
                        <div style={{ margin: 32 }}>
                            <LegacyCard key={card.name} {...card} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const Legacy = React.forwardRef<ReactAdapter>((_, ref) => {
    return <ReactAdapter component={WrappedLegacy} ref={ref} />;
});

export default Legacy;
