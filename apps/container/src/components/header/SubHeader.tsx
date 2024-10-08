import React, {useEffect} from 'react';
import { useQuery, queryOptions } from '@tanstack/react-query';

type responseData = { crossed: number; notCrossed: number };

export const SubHeader: React.FC = () => {
    const { data, refetch } = useQuery(
        queryOptions({
            queryKey: ['stats'],
            queryFn: async () =>
                await ((
                    await fetch(`${window.location.origin}/stats`, { method: 'GET' })
                ).json() as Promise<responseData>),
        })
    );

    useEffect(() => {
        document.addEventListener('stats-refetch', () => refetch())

        return () => {
            document.removeEventListener('stats-refetch', () => refetch())
        }

    })

    return <div className='' style={{ height: 45 }} />;
};

export default SubHeader;
