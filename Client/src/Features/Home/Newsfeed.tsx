import React from "react";
import "./Newsfeed.css";
import avatar from "../../assets/avatar.jpg";
import imagePost from "../../assets/cat.jpg";
import { Link } from "react-router-dom";
import { BiHeart, BiMessageRounded, BiSend } from "react-icons/bi";

const Newsfeed = () => {
    const data: Array<Number> = [1, 2, 3, 4, 5, 6];
    return (
        <div className="Newsfeed">
            {data.map((item) => (
                <Post />
            ))}
        </div>
    );
};

const Post = () => {
    return (
        <div className="Post">
            <Link to="/" className="account">
                <img alt="avatar" src={avatar} />
                <span>luftmensch</span>
            </Link>
            <img className="image-post" src={imagePost} alt="image" />
            <div className="interactive">
                <BiHeart className="icon" />
                <BiMessageRounded className="icon" />
                <BiSend className="icon" />
            </div>
            <div className="caption">
                <Link to="/" className="account-name">
                    <span>luftmensch</span>
                </Link>
                <p className="content">This is my cat. He is so cute :)) </p>
            </div>
            <span className="show-comments">Show all of 5 comments</span>
        </div>
    );
};

export default Newsfeed;
