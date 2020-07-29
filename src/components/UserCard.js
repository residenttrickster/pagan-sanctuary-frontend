import React from 'react';

class UserCard extends React.Component {

    render() {

        const { username, bio } = this.props

        return (
        <div> 
        <h3>{username}</h3>
        <i>{bio}</i>
        </div>
        )
    }
}

export default UserCard