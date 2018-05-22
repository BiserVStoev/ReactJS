import React, { Component } from 'react';
import Comment from './partials/Comment';
import reqHandler from '../../utils/reqHandler';
import submittedDataConverter from '../../utils/submittedDataConverter';

class Details extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentPost: {},
            comments: []
        };
    }

    componentDidMount(){
        reqHandler.getSinglePost(this.props.match.params.id)
        .then(data => {
            this.setState({currentPost: data});
            reqHandler.getComments(this.props.match.params.id)
            .then(commentsData => {
                this.setState({comments: commentsData});
                console.log(this.state)
            })
        })
    }

    render(){
        if(Object.keys(this.state.currentPost).length === 0) return null;
        return (
            <section id="viewComments">
            <div class="post">
                <div class="col thumbnail">
                    <a href={this.state.currentPost.url}>
                        <img src={this.state.currentPost.imageUrl} />
                    </a>
                </div>
                <div class="post-content">
                    <div class="title">
                        <a href={this.state.currentPost.url}>
                            {this.state.currentPost.title}
                        </a>
                    </div>
                    <div class="details">
                        <p>{this.state.currentPost.description}</p>
                        <div class="info">
                            submitted {submittedDataConverter(this.state.currentPost._kmd.lmt)} day ago by {this.state.currentPost.author}
                        </div>
                        <div class="controls">
                            <ul>
                                <li class="action"><a class="editLink" href="#">edit</a></li>
                                <li class="action"><a class="deleteLink" href="#">delete</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="post post-content">
                <form id="commentForm">
                    <label>Comment</label>
                    <textarea name="content" type="text"></textarea>
                    <input type="submit" value="Add Comment" id="btnPostComment" />
                </form>
            </div>
            {
                this.state.comments.map((v, i) => {
                    return <Comment key={v._id} content={v.content} author={v.author} dateSubmitted={v._kmd.lmt}/>
                })
            }
            <article class="post post-content">
                <p>Thanks, just what I needed.</p>
                <div class="info">
                    submitted 5 days ago by Gosho | <a href="#" class="deleteLink">delete</a>
                </div>
            </article>
        </section>
        )
    }
}

export default Details;