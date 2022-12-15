import {useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import UsersList from "./UsersList";
import Wrapper from "../Helpers/Wrapper";
function AddUser(props) {
    const [enteredUsername,setEnteredUserName] = useState('')  
    const [enteredAge,setEnteredAge] = useState('')
    const [enterUserlist,setUserList] = useState([])
     const[error,setError]=useState();

    const AddUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
          setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age'
          })
        }
        else if(+enteredAge<0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (> 0)'
              })
        }else{
            setUserList(
                (prevState) => {
                 return   [...prevState,{name:enteredUsername,age:enteredAge,id:Math.random().toString(),}] 
                }
                )
            setEnteredAge('')
            setEnteredUserName('')
        }
     
    };  
    const enteredUsernameHandler = (event) => {
        setEnteredUserName(event.target.value)
    
    }
    const enteredAgeHandler = (event) => {
        setEnteredAge(event.target.value)
       
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <Wrapper>
        {error && <ErrorModal
         title={error.title} 
         message={error.message}
          onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={AddUserHandler}>
                <label htmlFor="username">UserName</label>
                <input id="username" type="text" value={enteredUsername} onChange={enteredUsernameHandler}/>
                <label htmlFor="age">Age</label>
                <input id="age" type="number" value={enteredAge} onChange={enteredAgeHandler}/>
                <Button type="submit">Add User</Button> 
            </form>
        </Card>
        <UsersList users={enterUserlist}/>
        </Wrapper>
    );

}

export default AddUser;