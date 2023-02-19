import React, { Component , useState , useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";

const Search = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleRegistration = (data) => props.searchClicked(data.name);

  const handleError = (errors) => {};

  const registerOptions = {
    name: { required: "Name is required" },
  };

  return (
    <div className="container mt-5" >
      <div className="row justify-content-center">

    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
    <div class="input-group  w-300 mx-auto">

        <input    class="form-control" placeholder='Search by username'
 name="name" type="text" {...register('name', registerOptions.name) }/>
        <small className="text-danger">
          {errors?.name && errors.name.message}
        </small>
      
      <button variant="outline-success" >Search</button>
      </div>
    </form>
    </div>
    </div>

  );
};
export default Search;