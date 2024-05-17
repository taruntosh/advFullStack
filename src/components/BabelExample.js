import React from 'react';
import {jsx as _jsx} from 'react/jsx-runtime'
import UseEffectExample1 from './UseEffectExample1';

const BabelExample = () => {
    //   return React.createElement('h2', null, 'Hello world Test');
    return _jsx('h2', { children: <UseEffectExample1 /> });
}

//     return _jsx('h2', { children: 'Hello world' });


// const BabelExample = () => {
//     return <h1>Hello world test</h1>
// }

export default BabelExample;