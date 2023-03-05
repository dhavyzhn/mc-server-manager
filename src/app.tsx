import SideMenu from "./components/SideMenu";
import TitleBar from "./components/TitleBar";

export default function App() {
    return <>
        <TitleBar />
        <div id="App">
            <SideMenu />
        </div>
    </>
}