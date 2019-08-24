import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../axiosAuth';
import { Link } from 'react-router-dom';

const FriendsList = props => {
  
  
  useEffect(()=>{
    axiosWithAuth().get('http://localhost:5000/api/friends')
      .then(res=>{
        console.log('friends: ',res);
        props.setList(res.data);
      })
  },[]);

  return(
    <>
    <button onClick={()=>{localStorage.clear();props.history.push('/login');}}>Logout</button>
    <h1>List of Friends</h1>
    <Link to={'/add'}>Add a Friend</Link>
    {props.list.map(friend=>{
      return(
        <div>
          <h2>Name: {friend.name}</h2>
          <h3>Email: {friend.email}</h3>
          <h3>Age: {friend.age}</h3>
        </div>
      );
    })}
    </>
  );
};

export default FriendsList;