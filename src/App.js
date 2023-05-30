
import { createContext, useState } from 'react';
import './App.css';
import Form from './components/Form';
import ReactSwitch from 'react-switch';

export const  ThemContext= createContext(null)


function App() {
const [theme,setTheme]=useState("dark")


const toggleTheme=()=>{
  setTheme((curr)=>(curr==="light"?"dark":"light"))
}



  return (
    <ThemContext.Provider value={{theme,toggleTheme}} >
    <div className="App" id={theme}>
<Form/>
    <div className='switch'> 
    <label  >{theme==="light"?"Light mode ":"Dark mode "}     </label>
    <ReactSwitch  onChange={toggleTheme} checked={theme==="dark"} />
    
    </div>
    </div> 
    </ThemContext.Provider>
  );
}

export default App;
