import React, { useEffect } from 'react';
import { useQuery, queryOptions } from '@tanstack/react-query';
import { StackLayout, FlexLayout } from '@salt-ds/core';

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
        document.addEventListener('stats-refetch', () => refetch());

        return () => {
            document.removeEventListener('stats-refetch', () => refetch());
        };
    });

    return (
        <FlexLayout
            dir='row'
            justify='center'
            gap={20}
            style={{ borderBottom: 'solid', borderBottomColor: 'gainsboro', paddingBottom: 16 }}
        >
            <StackLayout dir='column'>
                <FlexLayout dir='row' className='items-center justify-center'>
                    <StackLayout dir='column' gap={0} className='text-center'>
                        <span className='text-9xl text-teal-500 font-thin'>{data?.crossed}</span>
                        <span className='text-2xl'>Active Crossed Cards</span>
                    </StackLayout>
                    <StackLayout dir='column' gap={0} className='text-center'>
                        <span className='text-9xl text-teal-500 font-thin'>{data?.notCrossed}</span>
                        <span className='text-2xl'>Inactive Crossed Cards</span>
                    </StackLayout>
                </FlexLayout>
                <span style={{fontSize: 18 }} className='text-center w-full'>
                    <b>{`Sub Header (Container App API Fetch & React Version:${React.version})`}</b>
                </span>
            </StackLayout>
        </FlexLayout>
    );
};

export default SubHeader;
