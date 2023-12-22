import {useEffect, useState} from "react";
import Todos from "./components/todos";
import Style from './App.module.css';

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // useEffect(() => {
  //   console.log({task});
  //   console.log("todos----", todos);
  // });
  
  //"start": "react-scripts --openssl-legacy-provider start",

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch("http://localhost:3000/api/todos");
        const results = await response.json();
        console.log('results', results);
        setTodos(results);
      } catch(err) {
        setHasError(true)
        setErrorMessage(err.message);
        console.log("error", err.message)
      }
    };

    fetchData();
  }, [loading]);

  async function handleDelete(id) {
    try {
      setLoading(true);
     await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      setLoading(false);
    } catch(err) {
      setLoading(false);
      console.log(err)
    }
  }

  // function handleDelete(id) {
  //   // one way of deleting
  //   // const newTodos = todos.filter((todo) => todo.id !== id);
  //   // setTodos(newTodos);

  //   const index = todos.findIndex((todo) => (todo.id === id));
  //   if(index !== -1){
  //   // console.log("index", index);
  //   const newTodos = [...todos];
  //   const del = newTodos.splice(index, 1);
  //   // console.log("del", del[0].id);
  //   const delId = del[0].id;
  //   const ldata = JSON.parse(localStorage.getItem("tasks"));
  //  const remainingTodos = ldata.filter((dt) => dt.id !== delId);
  
  //  localStorage.setItem("tasks", JSON.stringify([...remainingTodos]));
   
  //  setTodos(remainingTodos);
  // } else {
  //   return "the index does not exist";
  // }
  // }

  // useEffect(() => {
  //   // localStorage.setItem('tasks', JSON.stringify(todos));
  //   const ldata = JSON.parse(localStorage.getItem("tasks"));
  //   // console.log(ldata);
  //   if(ldata === null) {
  //     console.log("it is null");
  //     setTodos([]);
  //   } else {
  //     setTodos(ldata);
  //   }
  //   if(ldata.length > 0){
  //     setTodos(ldata);
  //   }
  // }, []);

  async function handleUpdate(id) {
    try {
      setLoading(true);
      await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
        setLoading(false);
    } catch(err) {
      setLoading(false);
      console.log(err)
    }
  }

  // function handleUpdate(id) {
  //   const updatedTodos = todos.map((todo) => {
  //     if(todo.id === id) {
  //       const ldata = JSON.parse(localStorage.getItem("tasks"));
  //       const updateLocal = ldata.map((dt) => {
  //         if(dt.id === id) {
  //           return {...dt, completed: !dt.completed}
  //         }
  //       });
  //       localStorage.setItem("tasks", JSON.stringify([...updateLocal]));
  //       return {...todo, completed: !todo.completed};
  //     }
  //     return todo;
  //   });
  //   setTodos(updatedTodos);
  // }

  // function addTodo(e) {
  //   e.preventDefault();
  //   if( !task ) {
  //     return;
  //   } else {
  //   const todo = {
  //     id: todos.length + 1,
  //     chore: task,
  //     completed: false
  //   }
  //   setTodos([...todos, todo]);
  //   localStorage.setItem("tasks", JSON.stringify([...todos, todo]));
  //   setTask("");
  // }
  // }

  async function addTodo(e) {
    e.preventDefault();
    const todo = {
      chore: task
    }

    try {
      setLoading(true);
      const request = await fetch('http://localhost:3000/api/todos', {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
        }
      });
      setTask("");
     const response = await request.json();
     setLoading(false);
     console.log(response);
    } catch(err) {
      setLoading(false);
      console.log(err);
    }
  }

  if(hasError || errorMessage) {
    return (
    <div style = {{fontSize: "3rem", color: "tomato", textAlign: "center"}}>Oops! something went wrong: {errorMessage}</div>
  );
}

  return (
    <div className={Style.app}>
    <form onSubmit = {addTodo}>
    <label htmlFor="task" className={Style.label}>Add a task</label>{" "}<br />
    <input className={Style.input} type="text" name="" id="task" placeholder="add a task over here" 
    value={task}
    onChange={(e) => setTask(e.target.value)}
    />
    <button style={{marginLeft: "1rem"}} className={Style.btn} disabled={!task}>Add a task</button>
    </form>
    {loading ? (
      <div style = {{fontSize: "3rem", color: "blue"}}>Loading ... </div>
    ) : todos.length > 0 ? (
     <Todos 
     todos = {todos} 
     handleDelete = {handleDelete} 
     handleUpdate={handleUpdate} 
     />)
    : (
    <p>No task to accomplish right now, you can add a new one right now</p>
    )}
    </div>
  )
}
