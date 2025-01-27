import Header from "../components/header/Header.tsx";
import { Outlet } from "react-router-dom";

function HomeLayouts() {
    return (
        <>
            <Header/>
            <Outlet />
        </>
    );
}

export default HomeLayouts;