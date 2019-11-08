import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import NewPost from './NewPost/NewPost';
import Posts from "../Blog/Posts/Posts";
import FullPost from './FullPost/FullPost';
import './Blog.css';


class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/"
                                exact
                                activeClassName="active"
                                activeStyle={{
                                    color: "orange",
                                    textDecoration: "underline"
                                }}>Home</NavLink></li>
                            <li><NavLink
                                to={{
                                    pathname: "/new-post",
                                    hash: "#submit",
                                    search: "?quick-submit=true"
                                }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/:id" exact component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;