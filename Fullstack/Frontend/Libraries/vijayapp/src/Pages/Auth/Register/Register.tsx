import { useState } from "react";
import {useNavigate} from "react-router-dom";

export const Register:React.FC<{}>=()=>{
      var [username,setUsername]=useState('')
      var [useremail,setUseremail]=useState('')
      var [userpassword,setUserpassword]=useState('')
      const navigate = useNavigate();
      var [redirect,setRedirect]=useState(false)
      const handleSubmit = async()=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type","application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("name",username)
        urlencoded.append("email",useremail)
        urlencoded.append("password",userpassword)

        var requestOptions = {
            method : 'POST',
            headers : myHeaders,
            body : urlencoded
            //redirect : follow
        }
        var res=fetch("http://localhost:8005/api/register",requestOptions)
        var data=await(await res).text()
        .catch(error => console.log('error',error))
        console.log(typeof data)
        if(data== 'OK'){
            setRedirect(true)
        }
      }
      if(redirect){
        navigate('/login')
      }
      console.log(redirect)
      return <>
      {username}
      <div>
        <label htmlFor=""></label>
        <input type="text" name="name" onChange={(e)=>{setUsername(e.target.value)}} />
      </div>
      <div>
        <label htmlFor=""></label>
        <input type="email" name="email" onChange={(e)=>{setUseremail(e.target.value)}} />
      </div>
      <div>
        <label htmlFor=""></label>
        <input type="password" name="password" onChange={(e)=>{setUserpassword(e.target.value)}} />
      </div>
      <button onClick={handleSubmit}>submit</button>
      </>
}