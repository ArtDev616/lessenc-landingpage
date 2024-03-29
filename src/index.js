import React from 'react';
import ReactDOM from 'react-dom';
import Website from './site/Website.js';
import registerServiceWorker from './registerServiceWorker.js';

ReactDOM.render(<Website />, document.getElementById('root'));
registerServiceWorker();

if (module.hot)
{
    module.hot.accept();
}
// ./src/index.js