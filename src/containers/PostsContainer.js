import React from 'react';
import PostCard from '../components/PostCard';

class PostsContainer extends React.Component {

    renderPosts = () => {
        return this.props.posts.map(post =>
            <PostCard 
            key={post.id} 
            title={post.title}
            body={post.body}
            username={post.user.username}
            />)
    }

    render() {
        return (
            <div><h1>PostsContainer</h1>
            {this.renderPosts()}
            </div>
        )
    }
}

export default PostsContainer