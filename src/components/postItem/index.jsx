import React from 'react';
import {Description, PostBtns, PostContent, StyledApp, StyledButton, Text, Post} from "./styled";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const navigate = useNavigate()
    return (
        <StyledApp>
            <Post>
                <PostContent>
                    <Text>{props.post.id} {props.post.title}</Text>
                    <Description>{props.post.body}</Description>
                </PostContent>
                <PostBtns>
                    <StyledButton onClick={() => {
                        return navigate(`/posts/${props.post.id}`)
                    }}>
                        Открыть
                    </StyledButton>
                    <StyledButton onClick={() => {
                        return props.remove(props.post)
                    }}>
                        Удалить
                    </StyledButton>
                </PostBtns>
            </Post>
        </StyledApp>
    );
};

export default PostItem;