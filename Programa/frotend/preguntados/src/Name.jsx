import { useState } from "react";


export function Name({children,onSubmited}){



    
    

    const [valueState,setValueState] = useState('')







    

    function clicked(){
        const Name = valueState;

        onSubmited('./request', Name);

    }



    function handleChange(event) {
        setValueState(event.target.value);
    }

    return(
        <div className="container">
            <section className="form">
                <form>
                <label for="fname"><h3 >First name:</h3></label><br></br>
                <input type="text" id="fname" name="fname" value={valueState} onChange={handleChange} /> <br></br><br></br>
    {/*             <label for="lname">Last name:</label><br></br>
                <input type="text" id="lname" name="lname" /><br></br> */}
                <input className="sendInfo" type="submit" value="Submit" onClick={clicked}/> 
                </form> 
            </section>
        </div>
    );



}