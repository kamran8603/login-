import { useState } from "react";



const Login =()=>{
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const [login, setLogin]= useState('');

    const handleLogin=()=>{
        if(username !== '' && password!== ''){
            setLogin(true)
        }
    };
    if(login){
        return(
            <div>
               
                <h1>Hi {username}</h1>
                <p>content will coming soon </p>
            </div>
        )
    }

return(
    <div>
    <h1>You must have to login to view the content  </h1>
    <input type="email" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Email"/><br /><br />
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"/><br /><br />
    <button onClick={handleLogin}>submit</button>
    </div>
)
}
export default Login;