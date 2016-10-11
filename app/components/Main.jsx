import React from 'react';

import Nav from 'app/components/Nav';

var Main = (props) => {
    return (
        <div>
            <div>
                <div>
                    <Nav />
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Main;
