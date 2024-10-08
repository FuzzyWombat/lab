import React from 'react';
//React Adapter -> unable to properly npm link @lab/shared, so movd it into project
import { ReactAdapter } from './ReactAdapter';

function WrappedTest() {
    console.log('legacy-react-craco: ', React.version);

    return <div>LEGACY</div>;
}

const Test = React.forwardRef<ReactAdapter>((_, ref) => {
    return <ReactAdapter component={WrappedTest} ref={ref} />;
});

export default Test;
