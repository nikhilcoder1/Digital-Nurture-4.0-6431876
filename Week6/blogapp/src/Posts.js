import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            hasError: false,
        };
    }

    loadPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                const postList = data.map(p => new Post(p.userId, p.id, p.title, p.body));
                this.setState({ posts: postList });
            })
            .catch(error => {
                console.error("Error loading posts:", error);
                this.setState({ hasError: true });
            });
    };

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert("Something went wrong: " + error.message);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h2>Something went wrong while loading posts.</h2>;
        }

        return (
            <div>
                <h1>Blog Posts</h1>
                {this.state.posts.map(post => (
                    <div key={post.id} style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;