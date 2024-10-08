import React from 'react';
import { Spinner as SaltSpinner, Scrim } from '@salt-ds/core';

export const Spinner: React.FC = () => {
    return (
        <Scrim fixed={true} className='flex items-center justify-center'>
            <SaltSpinner />
        </Scrim>
    );
};

export default Spinner;
