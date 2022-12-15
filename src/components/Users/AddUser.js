import {useState, useRef} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import UsersList from "./UsersList";
import Wrapper from "../Helpers/Wrapper";
function AddUser(props) {
  const nameInputRef = useRef();
  const AgeInputRef = useRef();
  const CollegeNameInputRef = useRef()

    const [enterUserlist,setUserList] = useState([])
     const[error,setError]=useState();

    const AddUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value
        const enteredUserAge = AgeInputRef.current.value
        const enteredCollegeName = CollegeNameInputRef.current.value
        if(enteredName.trim().length===0 || enteredUserAge.trim().length===0 || enteredCollegeName.trim().length===0){
          setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age'
          })
        }
        else if(+enteredUserAge<0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (> 0)'
              })
        }else{
             
            setUserList(
                (prevState) => {
                    return   [...prevState,{name:enteredName,age:enteredUserAge,collegeName:enteredCollegeName,id:Math.random().toString(),}] 
                   }
            )
    
                
        }
     
    };  

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
                <input id="username" type="text"
                 ref={nameInputRef}
                 />
                <label htmlFor="age">Age</label>
                <input id="age" type="number" 
                ref={AgeInputRef}
                />
                <label htmlFor="college">College Name</label>
                <input id="college" type="text"
                ref={CollegeNameInputRef}
                />
                <Button type="submit">Add User</Button> 
            </form>
        </Card>
        <UsersList users={enterUserlist}/>
        </Wrapper>
    );

}

export default AddUser;