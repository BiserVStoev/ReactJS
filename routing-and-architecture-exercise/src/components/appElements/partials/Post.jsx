import React from 'react';
import { Link } from 'react-router-dom';
import submittedDataConverter from '../../../utils/submittedDataConverter';

const Post = (props) => {
    return (
        <article className="post">
            <div className="col rank">
                <span>{props.index}</span>
            </div>
            <div className="col thumbnail">
                <a href={props.url}>
                    <img alt='post-thumbnail' src={props.imageUrl} />
                </a>
            </div>
            <div className="post-content">
                <div className="title">
                    <a href={props.url}>
                        {props.title}
                </a>
                </div>
                <div className="details">
                    <div className="info">
                        submitted {submittedDataConverter(props.submittedDate)} day ago by {props.author}
                </div>
                    <div className="controls">
                        <ul>
                            <li className="action"><Link className="commentsLink" to={`/details/${props.id}`}>comments</Link></li>
                            <li className="action"><Link className="editLink" to={`/details/${props.id}`} href="#">edit</Link></li>
                            <li className="action"><Link className="deleteLink" to={`/details/${props.id}`} href="#">delete</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    )
};

export default Post;