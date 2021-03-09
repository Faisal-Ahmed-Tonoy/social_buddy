import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';
 


const PostDetail = () => {
   
    const {id} = useParams();
    const [post,setPost]= useState({});
    const [comments,setComments] = useState([]);
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data));
    },[id])

    useEffect( ()=>{
        
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComments(data))

    },[id])
    return (
        <div>
           <h1>This is post detail {id} </h1> 
           <h1>User posted{post.id}</h1>
           <p>title :{post.title}</p>
           <p>Number of Comments : {comments.length}</p>
          
           {
               comments.map(comment => <Comment comment={comment}></Comment>)
           }
            
          </div>
    );
};

export default PostDetail;