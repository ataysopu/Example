import React from 'react';
import PostItem from "../postItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import './style.css'

const PostList = ({atay, remove, title}) => {
    console.log(atay)
    if (!atay.length) {
        return <h1 style={{textAlign: "center"}}>Посты отсутсвуют</h1>
    }


    return (
        <div>
            <h1 style={{display: "flex", justifyContent: "center"}}>
                {title}
            </h1>
            <TransitionGroup>
                {atay.map((post, index) => {
                    return <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="item"
                    >
                        <PostItem remove={remove} number={index + 1} post={post}/>
                    </CSSTransition>
                })}
            </TransitionGroup>
        </div>
    );
};

export default PostList;