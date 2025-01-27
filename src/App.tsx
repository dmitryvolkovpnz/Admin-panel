import './App.scss'
import Main from "./page/Main.tsx";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import HomeLayouts from "./layouts/home-layouts.tsx";
import Accepted from "./page/Accepted.tsx";
import Analitics from "./page/Analitics.tsx";
import PreAccepted from "./page/Pre-accepted.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<HomeLayouts />}>
                    <Route path="/" Component={Main}/>
                    <Route path="/accepted" Component={Accepted} />
                    <Route path="/analitics" Component={Analitics} />
                    <Route path="/pre-accepted" Component={PreAccepted} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
