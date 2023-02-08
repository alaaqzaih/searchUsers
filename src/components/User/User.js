import React, { useState, useEffect } from "react";
import "./User.css";
import user from "../../assets/unknown.jpg";


const User = (props) => {



  // const imageUrl = props.currentUser.avatar_url? props.currentUser.avatar_url : user;


  // const [image, setImage] = useState("")
  // useEffect(() => {
  //   setImage(user);

  // }, []);
  console.log(props);


  return (
    <div>

      {props.currentUser.map(user => {
        return (

          //       <div className="image">
          //         <img src = {item.currentUser.avatar_url}/>
          // //           </div>
          <div className="container">
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
      })}
    </div>


  );
};



export default User;
