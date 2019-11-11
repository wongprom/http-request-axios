import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import NewPost from './NewPost/NewPost';
import Posts from "../Blog/Posts/Posts";
import './Blog.css';


class Blog extends Component {
    state = {
        auth: false,
    }
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
                    {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Route render={() => {
                        return (
                            <div>
                                <h1>Not Found</h1>
                                <h3>Instead of render a callback (what I'm doing now), you can display your 404 component</h3>
                                <p>NOTE: This Route should always be the last Route</p>
                            </div>
                        )
                    }} />
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* <Route path="/" component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;