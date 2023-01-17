import React from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.jpg";
import {
    BiHomeAlt,
    BiSearch,
    BiMessageRounded,
    BiHeart,
    BiAddToQueue,
    BiMenu,
} from "react-icons/bi";

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <img className="logo" src={logo} alt="logo" />
            <div className="menu-list">
                <div className="menu-item active">
                    <BiHomeAlt className="icon" />
                    <span>Home</span>
                </div>
                <div className="menu-item">
                    <BiSearch className="icon" />
                    <span>Search</span>
                </div>
                <div className="menu-item">
                    <BiMessageRounded className="icon" />
                    <span>Message</span>
                </div>
                <div className="menu-item">
                    <BiHeart className="icon" />
                    <span>Notification</span>
                </div>
                <div className="menu-item">
                    <BiAddToQueue className="icon" />
                    <span>Post</span>
                </div>
                <div className="menu-item">
                    <img className="avatar" alt="avatar" src={avatar} />
                    <span>Profile</span>
                </div>
                <div className="menu-item">
                    <BiMenu className="icon" />
                    <span>More</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
