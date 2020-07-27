import React from 'react';
import PostsContainer from './PostsContainer';

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

    render() {
    return (
    <div>
    <h1>PostsPage</h1>
    <PostsContainer posts={this.state.posts} />
    </div>
    )
    }
}

export default PostsPage