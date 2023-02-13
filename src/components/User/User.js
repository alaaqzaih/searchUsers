import React, { useState, useEffect } from "react";
import "./User.css";


const User = (props) => {

  console.log(props);
  // console.log(props.currentUser[1]);
  const useridd = props.userId;
  
  // console.log(useridd);
  
  // if (props.userId != undefined){
  //   con

  // }
  


  return (
    <div>
      { props.currentUser.map(user =>  {  
       
      // const element = document.getElementById(useridd);
      //  console.log(useridd);
        return (
         
          <div className="container" key={user.id}  id={user.id} >
            <div className="user-information">
              <div className="image">
                <img src={user.avatar_url} />
              </div>
              <div className="user-content">

                <h3> Name :{user.name} </h3>
                {/* <h2> {user.id} </h2> */}
                <p>Company : {user.company}</p>
                <p>Location :{user.location} </p>

                <div className="more-data">
                  <p>

                    Followers : {user.followers} . Following : {user.following}
                  </p>


                </div>

              </div>
            </div>
             
          </div>


        );
        

      }
     
       
      )}

      
    </div>


  );
};



export default User;
