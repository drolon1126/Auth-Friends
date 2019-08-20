import React, {useState} from 'react';
import {Route} from 'react-router-dom'
import PrivateRoute from './privateRoute';
import './App.css';
import LoginForm from './components/loginForm';
import FriendsList from './components/friendsList';
import AddFriend from './components/addFriend';

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">

      <Route path='/login' component={LoginForm}/>
      <PrivateRoute path='/add' component={AddFriend} list={list} setList={setList}/>
      <PrivateRoute path='/' component={FriendsList} list={list} setList={setList}/>
    </div>
  );
}

export default App;
