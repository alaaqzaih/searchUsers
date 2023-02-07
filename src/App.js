import './App.css';
import Search from './components/search';
import User from './components/User/User';
import React, { useState ,useEffect } from 'react';
import { Fetch } from './utils/Fetch';
function App() {
  const [data_, setData_] = useState({});

  const searchClicked = async (username) => {

    const list = await Fetch(`https://api.github.com/users/${username}`, "GET");
      if(list.status===200) {
        setData_(list?.data);


         console.log(list);
         console.log(list.data.login);
         console.log(list.data);

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
      <User currentUser = {data_} />
    </div>
  );
}

export default App;
