import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from '../../axios';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostID: null,
        error: false,
    }
    //GET request 
    componentDidMount() {
        axios.get("/posts")
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: "Jimmy"
                    }
                })
                // Add data to our state
                this.setState({ posts: updatedPosts })

            })
            .catch(error => {
                // console.log(error)
                this.setState({ error: true })
            });

    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostID: id })
    }
    render() {
        let posts = <p style={{ textAlign: "center" }}>Something went wrong!!!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />
            })
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostID} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;