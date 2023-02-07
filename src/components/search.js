import React, { Component , useState , useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = (props) => {
    const [username, setUsername] = useState("");
    const FindUsernameClicked = () => props.searchClicked(username)

    

return(

     <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
              
                                <form >
                                    <div class="input-group  w-300 mx-auto">
                                        <input type="search" 
                                        class="form-control"
                                         placeholder="Search Username"
                                          aria-label="Search Username"
                                           aria-describedby="basic-addon2"
                                           name='search'
                                           value={username}
                                         onChange = {(e)=> setUsername(e.target.value)}
                                           required
                                           
                                           />
                                     
                                    <Button variant="outline-success"    onClick={FindUsernameClicked} > Find User</Button>

                                    </div>

                                </form>
                             

                </div>

            </div>

        </div>

)

    
}

export default Search;
