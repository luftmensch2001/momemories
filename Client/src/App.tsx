import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Sidebar />
            <Outlet />
        </div>
    );
}

export default App;
