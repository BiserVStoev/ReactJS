import React, { Component } from 'react';
import Char from './Char';

class Bio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            curChar: {
                url: ''
            }
        };
    }

    componentDidMount() {
        this.setBioData(this.props);
    }

    componentWillReceiveProps(props) {
        this.setBioData(props);
    }

    setBioData(props) {
        fetch('http://localhost:9999/character/' + props.id).then(data => {
            return data.json();
        }).then(parsedData => {
            this.setState({ curChar: parsedData });
        });
    }

    render() {
        return (
            <div className={'bioRow'}>
                <fieldset>
                    <div className={'bioWrapper'}>
                        <Char params={({ url: this.state.curChar.url })} />
                        <p>{this.state.curChar.bio}</p>
                    </div>
                </fieldset>
            </div>
        )

    };
}

export default Bio;