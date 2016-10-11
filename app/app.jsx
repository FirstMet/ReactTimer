import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';

import Timer from 'app/components/Timer';
import Countdown from 'app/components/Countdown';

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Timer} />
            <Route path="countdown" component={Countdown} />
        </Route>
    </Router>,
    document.querySelector('#app')
);
