import React, { useEffect } from 'react';
import { useQuery, queryOptions } from '@tanstack/react-query';

export const SubHeader: React.FC = () => {
    //const {data, refetch} = useQuery(queryOptions({queryKey: ['stats'], queryFn: async () => await ((await fetch(`${window.location.origin}/stats`, {method: 'GET'})).json())}))

    useEffect(() => {
        (async () => {
            const response = await (await fetch(`${window.location.origin}/assets/stats`, { method: 'GET' })).json();

            console.log(response);
        })();
    });

    return <div className='' style={{ height: 45 }} />;
};

export default SubHeader;
