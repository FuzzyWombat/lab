import React from 'react';
//React Adapter -> unable to properly npm link @lab/shared, so movd it into project
import { ReactAdapter } from './ReactAdapter';

function WrappedTest() {
    console.log('legacy-react-craco: ', React.version);
    return (
        <div className='Test'>
            <header className='Test-header'>
                <p>
                    Edit <code>src/Test.tsx</code> and save to reload.
                </p>
                <a className='Test-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                    Learn React
                </a>
            </header>
        </div>
    );
}

const Test = React.forwardRef<ReactAdapter>((_, ref) => {
    return <ReactAdapter component={WrappedTest} ref={ref} />;
});

export default Test;
