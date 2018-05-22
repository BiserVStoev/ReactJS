import React from 'react';

const singleChar = (props) => {
    return (
        <div className='char-img-wrapper'>
          <img alt='char' src={props.params.url} />
        </div>
    )
}; 

export default singleChar;