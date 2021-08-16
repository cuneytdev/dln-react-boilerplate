import './App.scss';
import Router from './navigation/routing';
import {Provider} from "react-redux";
import {store} from "./store";
import {IntlProvider} from 'react-intl';

function App() {
    return <Provider store={store}>
        <IntlProvider locale={'tr'}>
            <Router/>
        </IntlProvider>
    </Provider>
}

export default App;
