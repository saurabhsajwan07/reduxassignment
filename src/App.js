import './App.css';
import React,{ useEffect, useRef, useState} from "react";
import { connect, useDispatch, useSelector} from 'react-redux';
import {getUserData} from "./reducer/userReducer";

function App(props) {
  const [storeData, setStoreData] = useState();
  const idRef = useRef(null);
  const dispatch = useDispatch();
  const data= useSelector((state)=>state);

  useEffect(()=>{
    if(props.user && props.user.data) {
      setStoreData(props.user.data)
    }
   },[props.user])

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getUserData(idRef.current.value));
  };

  console.log(props.user.data);
  console.log("storeData", storeData);
  

  return (
    <>
      <input type='text' ref={idRef} name='id' />
      <button type='submit' onClick={handleSubmit}>
        Submit
      </button>
    
      <div>
        <h2>Data in {storeData?.name}</h2>
        <p>{storeData?.rotation_period}</p>
        <p>{storeData?.orbital_period}</p>
        <p>{storeData?.diameter}</p>
        <p>{storeData?.climate}</p>
        <p>{storeData?.gravity}</p>
        <p>{storeData?.population}</p>
        <p>{storeData?.terrain}</p>
      </div>

    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.post
  }
}

export default connect(mapStateToProps, null)(App);