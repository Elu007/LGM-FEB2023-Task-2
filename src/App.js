import './App.css';
import React, { useState, useEffect } from 'react';
import Users from './Users'
import Navbar from './Navbar';
import Loading from './Loading'
import Axios from 'axios';

function App() {

  const [isClicked, setIsClicked] = useState(0);
  const [data, setData] = useState(null);
  const [isLoader, setIsLoader] = useState(false);

  const getUsers = () => {
    setIsLoader(true)

    Axios.get("https://reqres.in/api/users?page=1").then(
      (response) => {
        // console.log(response.data)
        console.log(response.data.data)
        setData(response.data.data);

        setIsLoader(false)
      }
    )
  }
  
  useEffect(() => {
    isClicked && getUsers();
  }, [isClicked])

  return (
    <div className="App">
      <Navbar onSetIsClicked={setIsClicked}/>
      <div className='d-flex flex-wrap justify-content-center'>
        {data&&data.map((user) => {
          return <Users key={user.id} avatar={user.avatar} first_name={user.first_name} last_name={user.last_name} email={user.email}/>
          
        })}
      </div>
      <Loading show={isLoader}/>
    </div>
  );
}

export default App;