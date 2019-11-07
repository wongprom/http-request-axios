import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);


export default post;

/**Using { withRouter } so the components that NOT are in <Route> can have eccess to the Route Props
|--------------------------------------------------
|
import { withRouter } from 'react-router-dom'

const post = (props) => {
    console.log(props)
    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    )
};

export default withRouter(post);
|--------------------------------------------------
*/

