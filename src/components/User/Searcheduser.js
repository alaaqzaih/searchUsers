import React, { useState, useEffect } from "react";
import "./User.css";
import user from "../../assets/unknown.jpg";


const Searcheduser = (props) => {
//   console.log(props);
//   console.log(props.currentUser[1]);
//   const isLoggedIn = props.flag;
//   console.log(isLoggedIn);
  return (
    <div>
       
          <div className="container"   >
            <div className="user-information">
              <div className="image">
                <img src={props.searcheduser.avatar_url} />

              </div>
              <div className="user-content">
                <h3> Name :{props.searcheduser.name} </h3>
                {/* <h2> {user.id} </h2> */}
                <p> Company : {props.searcheduser.company} </p>
                <p> Location : {props.searcheduser.location} </p>
                <div className="more-data">
                  <p>
                    Followers : {user.followers} . Following : {user.following}
                  </p>
                </div>
              </div>
            </div>
          </div>


        

     
    </div>


  );
};



export default Searcheduser;
