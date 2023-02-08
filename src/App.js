import './App.css';
import Search from './components/search';
import User from './components/User/User';
import React, { useState ,useEffect } from 'react';
import { Fetch } from './utils/Fetch';
function App() {

  const [data_, setData_] = useState({
    users:[],
    user:'',
    id: '',
    name:'',
    company:'',
    location:'',
    followers:'',
    following:'',
    avatar_url: ''
  });


  const searchClicked = async (username) => {
    let flag = true;
    
    const list = await Fetch(`https://api.github.com/users/${username}`, "GET");
      if(list.status===200) {
        {data_.users.map(user => {
          if(user.name.includes(list.data.name))
          return(
            flag= false
          )
          
      })}


        // setData_(list?.data);


        //  console.log(list);
        //  console.log(list.data.login);
        //  console.log(list.data);
        if(flag) {
        const newUser = {
          id: list.data.id,
          name:list.data.name,
          company: list.data.company,
          location:list.data.location,
          followers:list.data.followers,
          following:list.data.following,
          avatar_url:list.data.avatar_url
        }
        const updatedUsers = [...data_.users,newUser]
    
        setData_(
          {
            users: updatedUsers,
            user: "",
            id:"",
            name:'',
            company:'',
            location:'',
            followers:'',
            following:'',
            avatar_url:''
          }
        )
        console.log("handle submit")
        }
        else{
          console.log("duplicate")

        }
      }
      else {
        console.warn("Faild to load resources!");
        setData_([]); 
      }

     
    


  }
  return (
    <div className="App">
      <Search  searchClicked={searchClicked} />
      <br></br>
      <User currentUser = {data_.users } />
    </div>
  );
}

export default App;
