import React from 'react';
import { Outlet } from 'react-router-dom';
import { GridItem, GridLayout, StackLayout } from '@salt-ds/core';
//Custom Components
import Header from '../components/header/Header';
import NavigationBar from '../components/navigation/NavigationBar';

const NAV_ROUTES = [''];

export const Root: React.FC = () => {
    return (
        <StackLayout dir='column'>
            <Header />
            <GridLayout columns={{ xs: 6, sm: 6, md: 9, lg: 12, xl: 12 }}>
                <GridItem colSpan={{ xs: 2, sm: 2, md: 3, lg: 3, xl: 3 }}>
                    <NavigationBar linkRoutes={NAV_ROUTES} />
                </GridItem>
                <GridItem>
                    <Outlet />
                </GridItem>
            </GridLayout>
        </StackLayout>
    );
};

export default Root;

