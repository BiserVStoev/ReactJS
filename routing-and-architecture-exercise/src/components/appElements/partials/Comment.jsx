import React from 'react';
import submittedDataConverter from '../../../utils/submittedDataConverter';

const Comment = (props) => {
    return (
        <article className="post post-content">
            <p>{props.content}</p>
            <div className="info">
                submitted {submittedDataConverter(props.dateSubmitted)} ago by {props.author} | <a href="#" class="deleteLink">delete</a>
            </div>
        </article>
    )
};

export default Comment;