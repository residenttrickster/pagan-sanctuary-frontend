import React from 'react';
import UserCard from '../components/UserCard';

class UsersContainer extends React.Component {

    renderUsers = () => {
        return this.props.users.map(user =>
            <UserCard 
            key={user.id} 
            username={user.username}
            bio={user.bio}
            />)
    }

    render() {
        return (
            <div><h1>UsersContainer</h1>
            {this.renderUsers()}
            </div>
        )
    }
}

export default UsersContainer