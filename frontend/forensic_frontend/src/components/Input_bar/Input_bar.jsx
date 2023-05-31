import React,{useState} from 'react';
import './Input_bar.css'

const Input_bar = (props) => {
  const handleChange = (event) => {
    props.setValue(event.target.value);
  }
  return (
    <input className='input'type="text" placeholder={props.placeholder} onChange={handleChange} />
  )
}

export default Input_bar