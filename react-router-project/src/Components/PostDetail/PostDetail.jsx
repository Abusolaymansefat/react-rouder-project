import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetail = () => {
    const Post = useLoaderData();

    return (
        <div>
            <h2>{Post.title}</h2>
            <p>{Post.body}</p>
        </div>
    );
};

export default PostDetail;