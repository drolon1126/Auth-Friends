import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosAuth';
import { Link } from 'react-router-dom';

const AddFriend = props =>{
  const [friend, setFriend] = useState({});


  const add = e => {
    e.preventDefault();
    axiosWithAuth().post('http://localhost:5000/api/friends', friend)
      .then(res => {
        console.log('add', res)
        props.setList(res.data);
      })
  }

  const handleChange = e => {
      setFriend({
        ...friend,
        [e.target.name]: e.target.value,
      })
  }

  return(
    <div>
    <h1>Add a friend: </h1>
    <Link to={'/'}>Friend List</Link>
    <form onSubmit={add}>
      <input
        type="text"
        name="name"
        value={friend.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={friend.email}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        value={friend.age}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
    </div>
  );
};

export default AddFriend;