import { useEffect, useRef, useState } from "react"
import Modal from "./Modal"
import Button from "../Button";
import { v4 as uuidv4 } from 'uuid';

export default function LoginModal( {onLoginSuccess} ){
    const [isModalOpen,setIsModalOpen] = useState(false);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const formRef=useRef(null);
    const [error,setError] = useState(false)
    const [users, setUsers] = useState([]);
    const registeredUser = JSON.parse(localStorage.getItem("User"));

    const loginToken = uuidv4;

useEffect ( () =>{
    if(isModalOpen && usernameRef.current){
        usernameRef.current.focus();
    }
    
},[isModalOpen])

    const openModal= () => {
        setIsModalOpen(true);
        setError(false)
    };

    const closeModal =() => {
        setIsModalOpen(false);
    }

    const handleLogin = (event) =>{
        event.preventDefault();
        const emailInputVal = usernameRef.current.value;
        const passwordInputVal = passwordRef.current.value;
        if(registeredUser && 
            registeredUser.email ===emailInputVal && 
            registeredUser.password === passwordInputVal){
        alert("Successfully Logged In!")
        const loggedInUser ={
            loginID:loginToken(),
            UserInfo:{...registeredUser}
        }
        localStorage.setItem("LoggedInUsers", JSON.stringify(loggedInUser))
        setUsers(prev => [...prev, loggedInUser ])
        onLoginSuccess();
        console.log(users)
        }else{
            alert("Email or Password is incorrect.")
            if(usernameRef.current){
            usernameRef.current.focus();
            usernameRef.current.style.outline="none"
            usernameRef.current.style.border="1px solid red"
            }
            if(passwordRef.current){
            passwordRef.current.style.border="1px solid red"
            passwordRef.current.style.outline="none"
            }
            setError(true)
            console.log(usernameRef.current.style)
            console.log("Email or Password is incorrect.")
        }
    }


    return(
        <>
        <button onClick={openModal}>Login</button>
        
            <Modal show={isModalOpen} onClose={closeModal}>
                <form onSubmit={handleLogin} ref={formRef}>
                    <label for="email">Email</label>
                    <input name="email" type="email" placeholder="Enter Email" id="modal-login-input-email" ref={usernameRef} />
                    <label for="password">Password</label>
                    <input type="password" name="password" placeholder="Enter Password" id="modal-login-input-password" ref={passwordRef}/>
                    <Button text="Login" type="submit"/>{error && <p style={{color:"red", textAlign:"center", margin:"5px"}} className="error-msg">Invalid Credentials</p>}
                </form>
            </Modal>
        </>
    )
}