import './App.scss';
import Router from './navigation/routing';
import {Provider} from "react-redux";
import {store} from "./store";
import 'rsuite/lib/styles/themes/dark/index.less';

function App() {
    return <Provider store={store}>
        <Router/>
    </Provider>
}

export default App;
