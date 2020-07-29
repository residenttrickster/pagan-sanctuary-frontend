import React from 'react';
import UsersContainer from './UsersContainer';

class UsersPage extends React.Component {

    state = {
    users: [],
    }

    componentDidMount() {
        fetch(`http://localhost:3001/users`)
        .then(r => r.json())    
        .then(users => {
            this.setState({ users })
        })
    }

    render() {
    return (
    <div>
    <UsersContainer users={this.state.users} />
    </div>
    )
    }
}

export default UsersPage