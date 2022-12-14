import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const[userslist,setUserslist]=useState([])
  const AddUserHandler = (uName,uAge) => {
        setUserslist((prevUsersList) => {
          return[...prevUsersList,{name: uName,age: uAge, id: Math.random().toString()} ] 
        })
  }

  
  return (
    <div>
     <AddUser onAddUser={AddUserHandler}/>
     <UsersList users={userslist}/>
  
     
    </div>
  );
}

export default App;
