import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Newsfeed from "./Newsfeed";

const Home = () => {
    return (
        <div>
            <Sidebar />
            <Newsfeed />
        </div>
    );
};

export default Home;
