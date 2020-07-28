import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import HolidaysPage from './containers/HolidaysPage';
import './App.css';
import PostsPage from './containers/PostsPage';
import UsersPage from './containers/UsersPage';

function App() {

  const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

  const Navbar = () =>
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={link}
        /* add prop for activeStyle */
        activeStyle={{
          background: 'brown'
        }}
      >Home</NavLink>

      <NavLink
        to="/posts"
        exact
        style={link}
        activeStyle={{
          background: 'green'
        }}
      >Blogs</NavLink>

      <NavLink
      to="/users"
      exact
      style={link}
      activeStyle={{
        background: 'red'
      }}
      >List of Users</NavLink>
      
    </div>;

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <HolidaysPage />} />
        <Route exact path="/posts" render={() => <PostsPage /> } />
        <Route exact path="/users" render={() => <UsersPage /> } />
      </Switch>
    </div>
  );
}

export default App;


