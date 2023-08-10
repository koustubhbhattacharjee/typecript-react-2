import { useState } from "react"

export const LoggedIn=()=>{
    const [isLoggedIn,setIsLoggedIn]= useState(false)
    //Type inference, the false value gave it away to typescript whether isLoggedIn is boolean
    const handleLogin= ()=> {
        setIsLoggedIn(true)
    }
    const handleLogout = ()=> {
        setIsLoggedIn(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? 'LoggedIn':'loggedOut'}</div>
        </div>
    )
    }
