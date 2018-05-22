import React, { Component } from 'react';
import Post from './partials/Post';
import reqHandler from '../../utils/reqHandler';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        reqHandler.pullPosts()
            .then(d => {
                console.log(d)
                this.setState({ posts: d });
            });
    }

    render() {
        return (
            <section id="viewCatalog">
                <div className="posts">
                    {this.state.posts.map((v, i) => {
                        return <Post
                            key={v._id}
                            url={v.url}
                            id={v._id}
                            index={i + 1}
                            imageUrl={v.imageUrl}
                            submittedDate={v._kmd.lmt}
                            author={v.author} />
                    })}
                </div>
            </section>
        )
    }
}

export default Catalog;