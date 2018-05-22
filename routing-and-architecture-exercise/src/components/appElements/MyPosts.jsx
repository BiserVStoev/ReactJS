import React, { Component } from 'react';
import Post from './partials/Post';
import reqHandler from '../../utils/reqHandler';

class MyPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        reqHandler.pullMyPosts()
            .then(d => {
                this.setState({ posts: d });
            });
    }

    render() {
        return (
            <section id="viewMyPosts">
                <div className="post post-content">
                    <h1>Your Posts</h1>
                </div>
                <div className="posts">
                    {this.state.posts.map((v, i) => {
                        return <Post
                            key={v._id}
                            url={v.url}
                            index={i + 1}
                            id={v._id}
                            imageUrl={v.imageUrl}
                            submittedDate={v._kmd.lmt}
                            author={v.author} />
                    })}
                </div>
            </section>
        )
    }
}
export default MyPosts;