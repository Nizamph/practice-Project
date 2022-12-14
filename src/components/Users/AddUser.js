import {useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
function AddUser(props) {
    const [enteredUsername,setEnteredUserName] = useState('')  
    const [enteredAge,setEnteredAge] = useState('')
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
            props.onAddUser(enteredUsername,enteredAge)
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
        <div>
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
        </div>


    );

}

export default AddUser;