import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetail = () => {
    const Post = useLoaderData();
    const navigate = useNavigate();

    return (
        <div>
            <h2>{Post.title}</h2>
            <p>{Post.body}</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetail;