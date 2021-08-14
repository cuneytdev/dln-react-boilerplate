import './App.scss';
import {CustomMenu} from "./components/menu";
import {navigationMenu} from "./navigation/menu";
import {Header} from "./components/header";

function App() {
    return <>
        <Header/>
        <CustomMenu menu={navigationMenu}/>
    </>
}

export default App;
