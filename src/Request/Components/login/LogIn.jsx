import React from "react";
import { useState} from "react";
import { Route, useNavigate, Routes,Link } from "react-router-dom";
import NavigationBar from "../navigation/NavigationBar";



const LogIn = () => {
   const [email, setEmail] = useState("")
   const [message, setMessage]= useState()
    const [password,setPassword] = useState("")
    const [checked, setChecked] = useState(false)
    
    const user =[
        {
           email,
           password,
           id: Date.now(),
           key: Date.now()
        }
    ]
  const changePage= () =>{
    console.log("navigayion") 
    return(
        <Link to="NavigationBar"></Link>  
        
    )
  }
  const emailValidation = ()=>{
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if(setEmail == ""){
                setMessage("please enter the email!")
               console.log("empty")
               }
               if(emailRegex.test(email)){
                setMessage("error.use correct email!")
                
              }else{
                setMessage("what?")
            }  

  }
  const foo = () => { 
        const checkLocalstorage = JSON.parse(localStorage.getItem("users"))
        emailValidation()
        if(checkLocalstorage){
            {checkLocalstorage.find((item)=>{  
               if(item.email === email) {
                console.log("this email already ragac")
                return
               }
               if(item.email !== email){
                const userArray = [...user,...checkLocalstorage]
                localStorage.setItem("users", JSON.stringify(userArray)); 
                console.log("Email is valid")
               } 
         })
        }
        }else{
          localStorage.setItem("users", JSON.stringify(user));  
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
            <input type="password" placeholder="password" id="password" key="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <h1>{message}</h1>
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
