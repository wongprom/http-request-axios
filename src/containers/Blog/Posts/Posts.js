import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Post from '../../../components/Post/Post'
import FullPost from "../FullPost/FullPost";
import './Posts.css'


import axios from '../../../axios';


export class Posts extends Component {
  state = {
    posts: [],
  }
  componentDidMount() {
    // Extra props from react-router-dom that we can use. We get these props in default. 
    console.log(this.props)
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
        console.log(error)
        // this.setState({ error: true })
      });
  }
  postSelectedHandler = (id) => {
    // can use either way
    this.props.history.push({ pathname: '/posts/' + id })
    // this.props.history.push( "/posts/" + id )

  }
  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!!!</p>
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link  to={"/posts" + post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)} />
          // </Link>
        )
      })
    }
    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
      </div>
    )
  }
}

export default Posts;
