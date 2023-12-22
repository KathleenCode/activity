import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});




// import { useEffect, useState } from "react";
// import Todos from "./components/todos";
// import Style from "./App.module.css";
// export default function App() {
//   const [task, setTask] = useState("");
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(false);
//   // useEffect(() => {
//   //   const ldata = JSON.parse(localStorage.getItem("tasks"));
//   //   if (ldata === null) {
//   //     setTodos([]);
//   //   } else {
//   //     setTodos(ldata);
//   //   }
//   // }, []);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/todos");
//         const results = await response.json();
//         setTodos(results);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, [loading]);
//   // function handleUpdate(id) {
//   //   const updatedTodos = todos.map((todo) => {
//   //     if (todo.id === id) {
//   //       const ldata = JSON.parse(localStorage.getItem("tasks"));
//   //       const updateLocal = ldata.map((dt) => {
//   //         if (dt.id === id) {
//   //           return { ...dt, completed: !dt.completed };
//   //         } else {
//   //           return dt;
//   //         }
//   //       });
//   //       localStorage.setItem("tasks", JSON.stringify([...updateLocal]));
//   //       return { ...todo, completed: !todo.completed };
//   //     }
//   //     return todo;
//   //   });
//   //   setTodos(updatedTodos);
//   // }
//   async function handleUpdate(id) {
//     try {
//       setLoading(true);
//       await fetch(`http://localhost:3000/api/todos/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   }
//   // function handleDelete(id) {
//   //   // const newTodos = todos.filter((todo) => todo.id !== id);
//   //   // setTodos(newTodos);
//   //   const index = todos.findIndex((todo) => todo.id === id);
//   //   if (index !== -1) {
//   //     const newTodos = [...todos];
//   //     const del = newTodos.splice(index, 1);
//   //     // console.log("del", del);
//   //     const delId = del[0].id;
//   //     const ldata = JSON.parse(localStorage.getItem("tasks"));
//   //     const remainingTodos = ldata.filter((dt) => dt.id !== delId);
//   //     localStorage.setItem("tasks", JSON.stringify([...remainingTodos]));
//   //     setTodos(remainingTodos);
//   //   } else {
//   //     return "the index does not exist";
//   //   }
//   // }
//   // function addTodo(e) {
//   //   e.preventDefault();
//   //   if (!task) {
//   //     return;
//   //   } else {
//   //     const todo = {
//   //       id: todos.length + 1,
//   //       chore: task,
//   //       completed: false,
//   //     };
//   //     setTodos([...todos, todo]);
//   //     localStorage.setItem("tasks", JSON.stringify([...todos, todo]));
//   //     setTask("");
//   //   }
//   // }
//   async function handleDelete(id) {
//     try {
//       setLoading(true);
//       await fetch(`http://localhost:3000/api/todos/${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   }
//   async function addTodo(e) {
//     e.preventDefault();
//     const todo = {
//       chore: task,
//     };
//     try {
//       setLoading(true);
//       const request = await fetch("http://localhost:3000/api/todos", {
//         method: "POST",
//         body: JSON.stringify(todo),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       setTask("");
//       const response = await request.json();
//       setLoading(false);
//       console.log(response);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   }
//   // if (loading) {
//   //   return (
//   //     <div style={{ fontSize: "6rem", color: "red" }}>Loading .......</div>
//   //   );
//   // }
//   return (
//     <div className={Style.app}>
//       <form onSubmit={addTodo}>
//         <label htmlFor="task" className={Style.label}>
//           Add a task
//         </label>{" "}
//         <br />
//         <input
//           type="text"
//           className={Style.input}
//           name=""
//           id="task"
//           placeholder="add a task"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//         />
//         <button
//           style={{ marginLeft: "1rem" }}
//           disabled={!task}
//           className={Style.btn}
//         >
//           Add task
//         </button>
//       </form>
//       {loading ? (
//         <div style={{ fontSize: "3rem", color: "red" }}>Loading .......</div>
//       ) : todos.length > 0 ? (
//         <Todos
//           todos={todos}
//           handleDelete={handleDelete}
//           handleUpdate={handleUpdate}
//           str="this is a string"
//         />
//       ) : (
//         <p>No task to accomplish right now, you can add a new one above</p>
//       )}
//     </div>
//   );
// }







