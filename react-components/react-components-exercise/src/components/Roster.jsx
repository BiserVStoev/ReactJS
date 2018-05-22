import React, { Component } from 'react';
import Char from './Char';

import observerMenu from './../utils/observer';

class Roster extends Component {
    constructor(props) {
        super(props);

        this.state = {
            charArr: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:9999/roster').then(data => {
            return data.json();
        }).then(parsedData => {
            this.setState((prevState) => ({ charArr: parsedData }));
        })
    }

    render() {
        return (
            <div>
                {this.state.charArr.map((v, i) => {
                    return <div className='char-img-wrapper' key={i} onClick={() => { observerMenu.executeObserver('changeFocus', { focusedChar: v.id }) }}>
                        <Char params={v} />
                    </div>;
                })}
            </div>
        );
    }
}

export default Roster;