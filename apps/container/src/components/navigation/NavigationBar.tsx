import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { SaltProvider, StackLayout, NavigationItem } from '@salt-ds/core';

export const NavigationBar: React.FC<{ linkRoutes: Array<{ link: string; label: string }> }> = ({ linkRoutes }) => {
    const [active, setActive] = useState(() => {
        const active = sessionStorage.getItem('active')

        if(!active || active === null){
            return 'Home'
        }

        return active
    });

    const handleNavigation = useCallback((event: React.SyntheticEvent, label: string) => {
        sessionStorage.setItem('active', label)

        setActive(() => label);
    }, []);

    return (
        <SaltProvider density='low'>
            <StackLayout as='ul' gap={0.125} style={{ listStyle: 'none' }}>
                {linkRoutes.map((route) => {
                    return (
                        <li key={route.label} className='mt-6'>
                            <Link to={route.link}>
                                <NavigationItem
                                    href={''}
                                    active={active === route.label}
                                    orientation='vertical'
                                    onClick={(event) => handleNavigation(event, route.label)}
                                >
                                    {route.label}
                                </NavigationItem>
                            </Link>
                        </li>
                    );
                })}
            </StackLayout>
        </SaltProvider>
    );
};

export default NavigationBar;
