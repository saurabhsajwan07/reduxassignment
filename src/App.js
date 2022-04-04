import './App.css';
import React,{ useRef, useState} from "react";
import { useDispatch, useSelector} from 'react-redux';
import {getPost} from "./reducer/userReducer";

function App({store}) {
  const idRef = useRef(null);
  const dispatch = useDispatch();
  const data= useSelector((state)=>state);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getPost(idRef.current.value));
  };

  console.log(data.post.data);

  return (
    <>
      <input type='text' ref={idRef} name='id' />
      <button type='submit' onClick={handleSubmit}>
        Submit
      </button>
{/*     
      <div>
        {
         data.map((item)=>{
         return( 
           <>
            <p>{item.name}</p>
            <p>{item.rotation_period}</p>
            <p>{item.orbital_period}</p>
            <p>{item.diameter}</p>
            <p>{item.climate}</p>
            <p>{item.gravity}</p>
            <p>{item.population}</p>
            <p>{item.terrain}</p>
            </>
          )
         })
        }
      </div> */}
    </>
  );
}

export default App;