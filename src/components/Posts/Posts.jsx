import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h2>All posts are here</h2>
        </div>
    );
};

export default Posts;