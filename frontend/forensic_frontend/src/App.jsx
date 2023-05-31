import './App.css';
import Input_bar from './components/Input_bar/Input_bar';
import Buttons from './components/Buttons/Buttons';
import { useState } from 'react';

function App() {
  const [value,setValue] = useState('');
  const parameters = ['Subject ID','Subject Name','Age','Sex','Admission ID','Test ID'];

  const make_field = (x)=>{
    return(
      <div className="search_bar">
           <div className="search_bar1">
             <div className="search_bar2"></div>
             <div className="search_bar3">
               <Input_bar value={value} setValue={setValue} placeholder={x}/>
             </div>
             <div className="search_bar4"></div>
           </div>
         </div>
      // <div>hello</div>
    );
  };
  return (
    <>
      <div className="container">
        {parameters.map(x => make_field(x))}
        {/* <div className="search_bar">
           <div className="search_bar1">
             <div className="search_bar2"></div>
             <div className="search_bar3">
               <Input_bar value={value} setValue={setValue} placeholder='Subject ID'/>
             </div>
             <div className="search_bar4"></div>
           </div>
         </div> */}

        <div className="buttons">
          <div className="buttons1">
            <div className="button1">
                  <Buttons text='Add Data' value={value} button_class='insert'/></div>
          </div>
          <div className="button2">
            {/* <div className="button2"><Buttons text='Search'/></div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
