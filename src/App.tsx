import './App.scss';
import {CustomMenu} from "./components/menu";
import {navigationMenu} from "./navigation/menu";

function App() {
    return <CustomMenu menu={navigationMenu}/>
}

export default App;
