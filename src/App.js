import React from 'react';
import HolidaysPage from './containers/HolidaysPage';
import './App.css';
import PostsPage from './containers/PostsPage';
import UsersPage from './containers/UsersPage';

function App() {
  return (
    <div className="App">
      <UsersPage />
      <PostsPage />
      <HolidaysPage />
    </div>
  );
}

export default App;


