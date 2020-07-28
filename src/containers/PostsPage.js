import React from 'react';
import PostsContainer from './PostsContainer';
import NewPost from '../components/NewPost';

class PostsPage extends React.Component {

    state = {
        posts: [],
    }

    componentDidMount() {
        fetch(`http://localhost:3001/posts`)
        .then(r => r.json())    
        .then(posts => {
            this.setState({ posts })
        })
    }

    addNewPost = (newPost) => {
        this.setState ({
            posts: [newPost, ...this.state.posts]
        })
    }

    deletePost = id => {
        const updatedPosts = this.state.posts.filter(post => {
            if (post.id !== id) {
            return true
            } else {
            return false
            }
        })

        this.setState({
            posts: updatedPosts
        })
        }

    updatePost = (updatedPost) => {
        const updatedPosts = this.state.posts.map(post => {
            if (post.id === updatedPost.id) {
            return updatedPosts
            } else {
            return post
            }
        })

        this.setState({
            posts: updatedPosts
        })
        }

    render() {
    return (
    <div>
    <h1>Read Posts</h1>
    <NewPost addNewPost={this.addNewPost}/>
    <PostsContainer posts={this.state.posts} updatePost={this.updatePost} deletePost={this.deletePost} />
    </div>
    )
    }
}

export default PostsPage