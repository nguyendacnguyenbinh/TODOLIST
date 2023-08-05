import { useState } from "react";
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [work, setWork] = useState('')
  const [todos, setTodos] = useState([])
  
  const handleInput = (e) => {
    const value = e.target.value
    setWork(value)
    }

    const handleSubmit = (e) => {
      if (todos.some(todo => todo.id === work.replace(/\s+/g, ''))){
        toast.error('Already added!')
      } else 
        {setTodos(prev => [...prev, {id: work.replace(/\s+/g, ''), job: work}])
        setWork('')
      }
      
          
        }

        console.log(todos)

  return (
   <>
      <div className="App flex flex-col items-center border h-screen justify-center">
        <div className="flex">
          <input
          value={work}
          onChange={handleInput} 
          type="text" className="outline-none border border-blue-500 px-4 py-2 rounded-sm"></input>
          <button 
           type="button" 
           className="outline-none bg-blue-500 px-4 py-2 ml-2 rounded-md text-white cursor-pointer"
           onClick={handleSubmit}
           >
            Add
          </button>
        </div>
        <div>
          <h3>Content: 
            <ul>
                {todos.map((todo) => <li key={todo.id}>{todo.job}</li>)}
            </ul>
          </h3>
        </div>
      </div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
      
   </>
  );
}

export default App;
