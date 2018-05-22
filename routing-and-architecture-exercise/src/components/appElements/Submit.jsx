import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import reqHandler from '../../utils/reqHandler';

class Submit extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            url: '',
            title: '',
            imageUrl: '',
            description: '',
            author: '',
            shouldRedirect: false
        }

        this.dataCollector = this.dataCollector.bind(this);
        this.createPost = this.createPost.bind(this);
    }

    createPost(e){
        e.preventDefault();
        reqHandler.createPost(this.state)
        .then(response => {
            this.setState({shouldRedirect: true})
        });
    }

    dataCollector(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    componentDidMount(){
        this.setState({author: localStorage.getItem('username')});
    }

    render() {
        if(this.state.shouldRedirect){
            return <Redirect to="/catalog" />;
        }

        return (
            <section id="viewSubmit">
                <div className="submitArea">
                    <h1>Submit Link</h1>
                    <p>Please, fill out the form. A thumbnail image is not required.</p>
                </div>
                <div className="submitArea formContainer">
                    <form id="submitForm" className="submitForm" onSubmit={this.createPost}>
                        <label>Link URL:</label>
                        <input onChange={this.dataCollector} name="url" type="text" />
                        <label>Link Title:</label>
                        <input onChange={this.dataCollector} name="title" type="text" />
                        <label>Link Thumbnail Image (optional):</label>
                        <input onChange={this.dataCollector} name="imageUrl" type="text" />
                        <label>Comment (optional):</label>
                        <textarea onChange={this.dataCollector} name="description"></textarea>
                        <input id="btnSubmitPost" value="Submit" type="submit" />
                    </form>
                </div>
            </section>
        );
    }
};

export default Submit;