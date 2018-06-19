import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './Portfolio';
import { unregister } from './registerServiceWorker';

ReactDOM.render(<Portfolio />, document.getElementById('root'));
unregister();
