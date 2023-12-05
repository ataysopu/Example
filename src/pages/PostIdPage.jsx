import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/loader";

const PostIdPage = () => {
    const params = useParams()
    console.log(params)
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostId, isLoading, error] = useFetching(async (id) => {
            const response = await PostService.getPostId(id)
            setPost(response.data)
        }
    )

    const [fetchCommentsId, isComLoading, comError] = useFetching(async (id) => {
            const response = await PostService.getComments(id)
            setComments(response.data)
        }
    )
    useEffect(() => {
        fetchPostId(params.id)
        fetchCommentsId(params.id)
    }, [])
    return (
        <div>
            <h1>Вы открыли страницу поста под номером {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }
            <h1>Комментарии</h1>
            {isLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;