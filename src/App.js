import './App.css';
import Search from './components/search';
import User from './components/User/User';
import React, { useState ,useEffect ,useRef } from 'react';
import { Fetch } from './utils/Fetch';
function App() {

  const [data_, setData_] = useState({
    users:[],
    user:'',
    login:'',
    id: '',
    name:'',
    company:'',
    location:'',
    followers:'',
    following:'',
    avatar_url: ''
  });

  const searchClicked = async (username) => {
  
    if (data_.users.filter(e => e.login === username).length > 0) {
      const element = document.getElementById(username);

      element.scrollIntoView({ behavior: 'smooth' });
      
      console.log("duplicate");
    }
    else{
    console.log("flag");
     const list = await Fetch(`https://api.github.com/users/${username}`, "GET" ).catch(() => {
      console.log('something bad happened') 
    })
  
    if(list.status===200) {
      const newUser = {
        id: list.data.id,
        login: list.data.login,
        name:list.data.name,
        company: list.data.company,
        location:list.data.location,
        followers:list.data.followers,
        following:list.data.following,
        avatar_url:list.data.avatar_url
      }
      const updatedUsers = [...data_.users,newUser]
      setData_(
        {users: updatedUsers}
      )
      console.log("handle submit")
      }
      else{
        username.preventDefault()
        console.warn("Faild to load resources!");
        setData_([]); 
      }

  }

}
 



  return (
     
    <div className="App">
  
      <Search  searchClicked={searchClicked}  />
      <br></br>
      <User currentUser = {data_.users }  />

    </div>
  );
}

export default App;
