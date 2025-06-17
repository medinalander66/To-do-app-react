import { useRef, useState } from "react";
import Modal from "./Modal";
import Button from "../Button";
import { v4 as uuidv4 } from 'uuid';

export default function Register(){
    const inputRef  =useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [register,setRegister]= useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
    const [addDetail,setAddDetail] = useState({
        id:uuidv4,
        firstName:"", 
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        registered:false
    });
    const {id,firstName,lastName,email,password,confirmPassword,registered} = addDetail;

    function resetForm(){
       setAddDetail({
        id:0,
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        registered:false
        })
    }

    const openModalRegister = () =>{
        setIsModalOpen(true)
    }
    const closeModalRegister = () =>{
        setIsModalOpen(false)
    }

    const handleDetails = (event) =>{
        //Destructrued the <input> target properties
          // event.target.name   = name = event.target
          // event.target.value  = value = event.target
          // console log "event", if you want to view the properties of an element!!
        const {name, value} = event.target;
            //set the details of the user of its first name, last name, email, password and confirm password while keeping the previous values.
                // used the [name] array, to be able to identify, what kind of name it has on each element in the "input"
                // ex.  <input name="firstName">
                //      <input name="lastName">
                //      <input name="password">....
        setAddDetail( prev => ({...prev, [name]:value}))
        console.log("ADD DETAILS OBJECT: ",addDetail)
        console.log("EVENT TARGET OBJECT: ",event.target)
    }

    const Register =(event) =>{
        event.preventDefault();
        //setRegister(prev =>[...prev, addDetail, addDetail.registered=true])
        
        //Check email if it exists
        const emailExist = register.some( (user) => user.email === email )

        if(emailExist){
            alert("This email is already registered!");
            inputRef.current.focus();
            inputRef.current.style.outline = "none"
            inputRef.current.style.border ="2px solid red"
            console.log(inputRef.current)
        }
        //Perform Validation on Form First
        if(firstName && lastName && email && password ===confirmPassword ){
            const newUser ={
                ...addDetail,
                id:uuidv4(),
                registered:true
            }
            localStorage.setItem("User",JSON.stringify(newUser))
            setRegister(prev => [...prev, newUser])
            setIsSuccess(true);
            resetForm();
            console.log("LOCAL STORAGE VALUE PARSE OBJECT",JSON.parse(localStorage.getItem("User")))
            console.log("REGISTER OBJECT",register)
        }
    }

    return(
        <> 
            <Button text="Register" action={openModalRegister}/>
            <Modal show={isModalOpen} onClose={closeModalRegister}>
                <form onSubmit={(event) =>Register(event)}>
                    <label for="firstname">First Name</label>
                    <input onChange={handleDetails} value={firstName} type="text" placeholder="Enter First Name" name="firstName"/>
                    <label for="lastname">Last Name </label>
                    <input onChange={handleDetails} value={lastName} type="text" placeholder="Enter Last Name" name="lastName"/>
                    <label for="email">Email</label>
                    <input  ref={inputRef} onChange={handleDetails} value={email}type="email" placeholder="Enter Email" id="modal-login-input-email" name="email" />
                    <label for="password">Password</label>
                    <input onChange={handleDetails} value={password} type="password" name="password" placeholder="Enter Password" id="modal-login-input-password"/>
                    <label for="confirm-password">Confirm Password</label>
                    <input onChange={handleDetails} value={confirmPassword}type="password" name="confirmPassword" placeholder="Confirm Password" id="modal-login-input-password"/>
                    {password !== confirmPassword&&<p style={{color:"red", textAlign:"center", margin:"5px"}}>Password Do not Match</p>}
                    <Button  text="Register" type="submit"/> 
                    { isSuccess && (<p style={{textAlign:"center", color:"green", margin:"5px"}}>Success Fully Registered!</p>) }
            </form>             
            </Modal>
        </>
    )

}