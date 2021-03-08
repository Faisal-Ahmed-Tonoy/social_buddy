import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
   
    const {id} = useParams();
    const [post,setPost]= useState({});
    const [comments,setComments] = useState([]);
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts${id}`)
        .then(res => res.json())
        .then(data => setPost(data));
    },[])
    useEffect(()=>{
        
        fetch(`https://jsonplaceholder.typicode.com/comments${id}`)
        .then(res => res.json())
        .then(data => setComments(data));

    },[])
    return (
        <div>
           <h1>This is post detail {id} </h1> 
           <h1>User posted{post.id}</h1>
           <p>title :{post.title}</p>
          <p>NUmber of Comments : {comments.length}</p>
          <p>Email : {comments.email}</p>
         
        
      
        </div>
    );
};

export default PostDetail;