import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null,
    }
    componentDidMount() {
        this.loadDate();

    }

    componentDidUpdate() {
        this.loadDate();
    }
    loadDate() {
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || this.state.loadedPost && this.state.loadedPost.id !== parseInt(this.props.match.params.id)) {
                axios.get("/posts/" + this.props.match.params.id)
                    .then(response => {
                        this.setState({ loadedPost: response.data })
                    })
            }
        }
    }
    deletePostHandler = () => {
        axios.delete("/posts/" + this.props.match.params.id)
            .then(response => {
                console.log(response)
            })
    }

    render() {
        // if props.id === null, = false. Show >Please select a Post!<
        let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
        // if this.props.match.params.id === true, = Show >Loading...<
        if (this.props.match.params.id) {
            post = <p style={{ textAlign: "center" }}>Loading...</p>;
        }
        //When the this.setState({ loadedPost: response.data }) is done, show post
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;