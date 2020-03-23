import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Store } from './redux/Store';
import { history } from './redux/reducer'
import GeneralRouter from './GeneralRouter';

ReactDOM.render(
  <Provider store={Store}>
    <ConnectedRouter history={history}>
      <GeneralRouter />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
