import React from "react";
import { useState} from "react";
import {useNavigate } from 'react-router-dom'


const LogIn = () => {
   const [email, setEmail] = useState("")
   const [message, setMessage]= useState()
    const [password,setPassword] = useState("")
    const [checked, setChecked] = useState(false)
    const [error, setError] = useState(null)
    const [errorMessage,setErrorMessage] = useState('')
    const navigate = useNavigate();
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const user =[
        {
           email,
           password,
           id: Date.now(),
           key: Date.now()
        }
    ]
 
  const emailValidation = ()=>{ 
     if(email === ""){
        setMessage("please enter the email!")
        console.log("empty")
        }
    if(!emailRegex.test(email)){
       setMessage("error.use correct email!")
                
    }else{
        setMessage("what?")
    }  

  }
  const passwordValidation = (e) => {
    const new_pass = e.target.value;
      setPassword(new_pass);
        
    
      var lowerCase = /[a-z]/g;
      var upperCase = /[A-Z]/g;
      var numbers = /[0-9]/g;
      if (!new_pass.match(lowerCase)) {
         setErrorMessage("Password should contains lowercase letters!");
      } else if (!new_pass.match(upperCase)) {
         setErrorMessage("Password should contain uppercase letters!");
      } else if (!new_pass.match(numbers)) {
         setErrorMessage("Password should contains numbers also!");
      } else if (new_pass.length < 8) {
         setErrorMessage("Password length should be more than 8.");
      } else {
         setErrorMessage("Password is strong!"); 
        
      }
  }
 
  const foo = () => { 
    try{
         emailValidation()
    
        const checkLocalstorage = JSON.parse(localStorage.getItem("users"))
        if(checkLocalstorage){
            {checkLocalstorage.find((item)=>{  
               if(item.email === email) {
                console.log("this email already ragac")
                return
               }
               if(item.email !== email && emailRegex.test(email)){
                const userArray = [...user,...checkLocalstorage]
                localStorage.setItem("users", JSON.stringify(userArray)); 
                setMessage("Email is valid")
                return
               } 
               
         })
        }
        }else{
          localStorage.setItem("users", JSON.stringify(user));  
        }
    }catch(error){
       setError("there is a error")
        return error
    }
       if (!error && email !=="" && emailRegex.test(email) ){
        navigate("/NavigationBar")
        
       }
        
  };
  

            const deleteItem = () => {
                const checkLocalstorage = JSON.parse(localStorage.getItem("users"))
                {checkLocalstorage.map((item) => {
                    const newLocalstorage = localStorage.removeItem(user.key)
                    localStorage.setItem("users", JSON.stringify(newLocalstorage));     
                })}
            }

            
    return (
        
        <form>
           
            <input type="email" placeholder="email" key ="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>  
            <input type="password" placeholder="password:Abc.@678" id="password" key="password" value={password} onChange={passwordValidation}/>
            <h1>{message}{errorMessage}</h1>

            <label>  
              <input type="checkBox" checked= {checked} onChange={(e) => setChecked(e.target.checked)}/>
              {""}
              not a robot? 
            </label>
            
            <button onClick={foo}> Submit</button>
            <button onClick={deleteItem}>Delete</button>
        </form>
        
        
       
    ) 
    
}

export default LogIn
