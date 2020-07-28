import React from 'react';
import PostCard from '../components/PostCard';

class PostsContainer extends React.Component {

    renderPosts = () => {
        return this.props.posts.map(post =>
            <PostCard 
            key={post.id} 
            id={post.id} 
            title={post.title}
            body={post.body}
            user={post.user.username}
            updatePost={this.props.updatePost}
            deletePost={this.props.deletePost}
            />)
    }

    render() {
        return (
            <div>
            {this.renderPosts()}
            </div>
        )
    }
}

export default PostsContainer