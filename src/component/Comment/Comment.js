import React from 'react';

const Comment = (props) => {
    const {id,name, email} =props.comment;
    return (
  
           <h1> {name} : {email} </h1>
      
    );
};

export default Comment;