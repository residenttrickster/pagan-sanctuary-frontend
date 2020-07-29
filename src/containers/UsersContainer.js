import React from 'react';
import UserCard from '../components/UserCard';
import './UsersContainer.css';

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
            <div className="users">
            {this.renderUsers()}
            </div>
        )
    }
}

export default UsersContainer