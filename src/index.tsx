import ReactDOM from 'react-dom';
import { App } from './app/App';
import { IsMobileProvider } from './context/useIsMobile';
import 'antd/dist/antd.css';
import './style.css';

import { store } from './redux/store';
import { Provider } from 'react-redux';

import './translations/init';

ReactDOM.render(
    <Provider store={store}>
        <IsMobileProvider>
            <App />
        </IsMobileProvider>
    </Provider>,
    document.getElementById('root'),
);
