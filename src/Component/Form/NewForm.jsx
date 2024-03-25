import { useState } from "react";
import Validation from "./Validation";

import "./Form.css"

const Newform = ()=>{

    const [userdetails, setUserdetails] = useState({
        name:"",
        email:"",
        password:""
    })
    const [errors,setErrors] = useState({})

   
    let InputTarget =(e)=>{

        let name = e.target.name;
        let value = e.target.value
        setUserdetails((user)=>({
            ...user,[name]:value
   
        }));
      
    };

    const submitHandler=(e)=>{
        e.preventDefault();
        
        console.log(userdetails);
       
        setErrors(Validation(userdetails))
        
        
    }

    

    return(
        <div className="formContainer">

            <form onSubmit={submitHandler}>
                <div className="formp">
                <label>Name:</label>
                <input type="text" name="name" id="name" placeholder="Your Name" onChange={InputTarget}></input>
                {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
                </div>

                <div className="formp">
                <label>Email:</label>
                <input type="email" name="email" id="email" placeholder="Your mail address" onChange={InputTarget}></input>
                {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                </div>

                <div className="formp">
                <label>Password:</label>
                <input type="password" name="password" id="password" placeholder="Your Password" onChange={InputTarget}></input>
                {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
                </div>

                <button type="submit" id="subbtn">Submit</button>
            </form>
        </div>
    )
}

export default Newform;