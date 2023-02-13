import './App.css';
import Search from './components/search';
import User from './components/User/User';
import React, { useState ,useEffect ,useRef } from 'react';
import { Fetch } from './utils/Fetch';
import Searcheduser from './components/User/Searcheduser'
function App() {
let flag2 = true;
// const ref = useRef(null);
// let userId = undefined;
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

    let flag = true;
    {data_.users.map(async user => {
      if(user.login.includes(username))
      { 
        //  userId = user.id;
           
     
        // const element = document.getElementById(` `.id);
        // console.log(element);
    
        // 👇️ (better) use a ref
        flag= false;
        // flag2 = false;
        // console.log(user.id);
      }
       
  })}

  if(flag){
  
    console.log("flag");
     const list = await Fetch(`https://api.github.com/users/${username}`, "GET" ).catch(() => {
      console.log('something bad happened') // will log THIRD (if error happens)
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
        {
          users: updatedUsers,
          user: "",
          login:'',
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
        username.preventDefault()

        console.warn("Faild to load resources!");
        setData_([]); 
      }
 
flag2 = true;

  }
  else{
    console.log("duplicate")
  }
        // setData_(list?.data);
        //  console.log(list);
        //  console.log(list.data.login);
        //  console.log(list.data);
        
        
     
        // console.log(flag2)

}
 



  return (
     
    <div className="App">
   {/* The user is <b> {flag2 ? <div id="root"> hiiii </div>  : 'not'} </b> logged in. */}
      {/* <h2 ref={element} id="box">
        bobbyhadz.com
      </h2> */}
      <Search  searchClicked={searchClicked} />
      <br></br>
      {/* <Searcheduser searcheduser= {user} /> */}
      <User currentUser = {data_.users }  />
    </div>
  );
}

export default App;
