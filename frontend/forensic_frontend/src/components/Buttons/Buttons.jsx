import React,{useEffect} from 'react';
import './Buttons.css';

const Buttons = (props) => {
    const display_text = () => {
        console.log(props.value);
    }
  return (
    <>
      <div className={props.button_class} onClick={display_text}>
        <div className='button3' id='insert' >{props.text}</div>
      </div>
    </>
    // <div>hello</div>
  )
}

export default Buttons