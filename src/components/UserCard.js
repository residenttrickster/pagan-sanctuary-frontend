import React from 'react';

class UserCard extends React.Component {

    render() {

        const { username, bio } = this.props

        return (
        <div> 
        <h3>Username:{username}</h3>
        <p>About: {bio}</p>
        </div>
        )
    }
}

export default UserCard