import React, { useEffect, useState } from "react";


const Request = ( () => {
    const [data,setData] = useState([])

    const name = async () => {
      try{
            const response = await fetch("https://reqres.in/api/users?page=1");
            const users = await response.json();
           
            setData(users.data);
            console.log(users)
         
      }catch(error){
        console.error("error")
    } 
    
}
console.log(data,"gchch")

    return(
        <>
        <button onClick={name}> click me</button>
        {data.map(item => (
            <div>
                 <h1 key={item.id}>{item.first_name} {item.last_name}</h1>  
                 <img src={item.avatar} alt="avatars"/>
                 <h1>email adress : {item.email}</h1>
            </div>

))}
        </>
        
    )
    
})
export default Request
//global unda shevkmna .jsx-is rom wer map-s mand iyebneb pobiektis brchxils da returns ar iyeneb da rocxa js-t abruneb, mashin chvweulebriv brchxils aseve returnis gareshe.