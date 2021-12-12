import ReactDOM from 'react-dom';
import { App } from './app/App';
import { IsMobileProvider } from './context/useIsMobile';
import 'antd/dist/antd.css';

import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <IsMobileProvider>
            <App />
        </IsMobileProvider>
    </Provider>,
    document.getElementById('root')
);
