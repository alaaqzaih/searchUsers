import React, { useState, useEffect } from "react";
import "./User.css";


const User = (props) => {

  console.log(props);
  const useridd = props.userId;


  return (
    <div>
      {props.currentUser.map(user => {

        return (

          <div className="container" key={user.login} id={user.login} >
            <div className="user-information">
              <div className="image">
                <img src={user.avatar_url} />
              </div>
              <div className="user-content">

                <h3> Name :{user.name} </h3>
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
