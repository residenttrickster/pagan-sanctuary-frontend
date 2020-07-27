import React from 'react';

class PostCard extends React.Component {
    render() {

        const { title, body, username } = this.props

        return (
        <div> 
        <h3>{title}</h3>
        By: <p>{username}</p>
        <p>{body}</p>
        </div>
        )
    }
}

export default PostCard