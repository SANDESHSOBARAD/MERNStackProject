import React from "react";
import Post from "./post/post";
import useStyles from './styles';
import { UseSelector, useSelector } from "react-redux";

const Posts = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    console.log(posts)
    return (
        <>
        <h1 className={classes.mainContainer}>POSTS</h1>
        <Post />
        <Post />
        </>
        
    );
}

export default Posts;