import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import NewPost from './NewPost/NewPost';
import Posts from "../Blog/Posts/Posts";
import './Blog.css';


class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="active"
                                activeStyle={{
                                    color: "orange",
                                    textDecoration: "underline"
                                }}>Posts</NavLink></li>
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
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                </Switch>
            </div>
        );
    }
}

export default Blog;