import React from "react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";



const LogIn = () => {
   const [email, setEmail] = useState("")
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
    
   
    
       //how to change id when u call/use massuve 
  
  const foo = () => { 
        const checkLocalstorage = JSON.parse(localStorage.getItem("users"))
       
        //find is map//delete function should write.
        if(checkLocalstorage){
            {checkLocalstorage.find((item)=>{
               if(item.email === email) {
                console.log("this email already ragac")
                return
               }
               if(item.email !== email){
                const userArray = [...user,...checkLocalstorage]
                localStorage.setItem("users", JSON.stringify(userArray)); 
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
            <label>  
              <input type="checkBox" checked= {checked} onChange={(e) => setChecked(e.target.checked)}/>
              {""}
              not a robot? 
            </label>
            
            <button onClick={foo} >Submit</button>
            <button onClick={deleteItem}>Delete</button>
        </form>
        
        
       
    ) 
    
}

export default LogIn
