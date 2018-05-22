import React from 'react';

const Header = (props) => {
    function logout() {
        localStorage.removeItem('kinveyToken');
    }

    return (
        <header>
            <span className="logo">☃</span><span className="header">SeenIt</span>
            {
                props.isAuthenticated
                    ?
                    <div id="profile"><span>{localStorage.getItem('username')}</span>|<a href='#' onClick={logout}>logout</a></div>
                    :
                    null
            }
        </header>
    )
}

export default Header;