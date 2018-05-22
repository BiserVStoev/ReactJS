import React from 'react';
import Menu from './Menu';
import ViewComponent from './ViewComponent';

const LoggedWrapper = () => {
    return (
        <div>
            <Menu />
            <ViewComponent />
        </div>
    )
};

export default LoggedWrapper;