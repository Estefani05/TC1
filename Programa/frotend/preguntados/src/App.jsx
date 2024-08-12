
import { useState} from "react";
import {Request} from "./Request";
import {Name} from "./Name";

const App = () => {

  const [currentPath,setCurrentPath] = useState('./Name');

  const [currentName,setName] = useState('Tefy');

  const onSubmit = (path,name) => {
    setName(name);
    setCurrentPath(path);
    

  };

return(
  


    
    <>
    {currentPath === './Name' && <Name onSubmited= {onSubmit}/>}
    {currentPath === './request' && <Request name = {currentName} onSubmited={onSubmit} />}

    </>
  
  
 


)



}



export default App;