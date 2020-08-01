import React from 'react';
import UsersContainer from './UsersContainer';
import header from './Header.png';

class UsersPage extends React.Component {

    state = {
    users: [],
    }

    componentDidMount() {
        fetch(`http://pagan-sanctuary-backend.herokuapp.com/users`)
        .then(r => r.json())    
        .then(users => {
            this.setState({ users })
        })
    }

    render() {
    return (
    <div>
    <img src={header} alt="header" width="850" height="400" />
    <UsersContainer users={this.state.users} />
    </div>
    )
    }
}

export default UsersPage