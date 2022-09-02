import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react'
import UserList from './UserList';



function App() {
  const [notes, setNotes] = useState("")
  const url='https://jsonplaceholder.typicode.com/users'
  const [users, setUsers] = useState([])
  useEffect(() => {
    getAllNotes();

    
  }, [])
  
  const getAllNotes=()=>{
    axios.get(`${url}`).then((Response)=>{
      setUsers(Response.data)
    }).catch(error=> console.error(`Error: ${error}`))
  }
  console.log(users);
  return (
    <div className="container">
      {users.map((el,i)=><UserList el={el}/>)}
      
  
</div>

  );
}

export default App;
