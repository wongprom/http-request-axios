import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        posts: []
    }
    //GET request 
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                // Add data to our state
                this.setState({ posts: response.data })

            });

    }
    render() {
        let posts = this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} />
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;