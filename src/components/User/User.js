import React, { useState, useEffect } from "react";
import "./User.css";


const User = (props) => {

  return (
    <div className="container">
    
      <div className="user-information">
        <div className="image">
          <img src={props.currentUser.avatar_url} />
        </div>
        <div className="user-content">
          <h3> Name :{props.currentUser.name} </h3>

          <p>Company : {props.currentUser.company}</p>
          <p>Location :{props.currentUser.location} </p>

          <div className="more-data">
            <p>
              
          Followers : {props.currentUser.followers} . Following : {props.currentUser.following} 
            </p>

           
       
            <p>
            </p>
          </div>
        </div>
      </div>
      <div className="user-repos">
       
      </div>
    </div>
  );
};

export default User;
