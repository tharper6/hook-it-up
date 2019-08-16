import React, { useState, useEffect } from 'react';
import BodyText from './BodyText';

const PostBody = (props) => {

const [postBody, setPostBody] = useState({});

const getPostBody = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`)
    const data = await res.json();
    setPostBody(data);
}

useEffect(() => {
    getPostBody();
}, [])

return(
    <BodyText postBody={postBody} />
)


}

export default PostBody;