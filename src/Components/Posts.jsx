import React, { useState, useEffect } from 'react';
import Post from './Post'

const Posts = () => {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        setPosts(data);
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <main className="container">
            {posts.map(post => {
                return (
                    <Post key={post.id} post={post} />
                )
            })}
        </main>
    )


}

export default Posts;