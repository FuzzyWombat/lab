import React, { useEffect, useState } from 'react';
//React Adapter -> unable to properly npm link @lab/shared, so movd it into project
import { ReactAdapter } from './ReactAdapter';
import CardRenderer from './cards/CardRenderer';

function WrappedLegacy() {
    console.log('legacy-react-craco: ', React.version);

    return <div>legacy</div>;
}

const Legacy = React.forwardRef<ReactAdapter>((_, ref) => {
    return <ReactAdapter component={WrappedLegacy} ref={ref} />;
});

export default Legacy;
