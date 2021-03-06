import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from 'styled-components'
import theme from './styled.theme'
import store from './store.app.js'
import App from './components/App'
import {Provider} from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo, faCoffee, faChevronDown, faChevronUp, faSearch, faPlus, faEllipsisV} from '@fortawesome/free-solid-svg-icons'
library.add(faIgloo, faCoffee, faChevronDown, faChevronUp, faSearch, faPlus, faEllipsisV)

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
