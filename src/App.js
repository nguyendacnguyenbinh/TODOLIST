import { useState } from 'react';
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const storeJobs = JSON.parse(localStorage.getItem('job'));
    const [work, setWork] = useState('');
    const [todos, setTodos] = useState(storeJobs ?? []);

    const handleInput = (e) => {
        const value = e.target.value;
        setWork(value);
    };

    const handleSubmit = (e) => {
        if (todos.some((todo) => todo.id === work.replace(/\s+/g, ''))) {
            toast.error('Already added!');
        } else {
            setTodos((prev) => {
                var newJob = [...prev, { id: work.replace(/\s+/g, ''), job: work }];
                const jsonJob = JSON.stringify(newJob);

                localStorage.setItem('job', jsonJob);

                return newJob;
            });

            toast.success('Added!');
            setWork('');
        }
    };

    const handleDelete = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    console.log(todos);
    return (
        <>
            <div className="App flex flex-col items-center border h-screen justify-center">
                <div className="flex">
                    <input
                        value={work}
                        onChange={handleInput}
                        type="text"
                        className="outline-none border border-blue-500 px-4 py-2 rounded-sm"
                    ></input>
                    <button
                        type="button"
                        className="outline-none bg-blue-500 px-4 py-2 ml-2 rounded-md text-white cursor-pointer"
                        onClick={handleSubmit}
                    >
                        Add
                    </button>
                </div>
                <div>
                    <h3>
                        Content:
                        <ul>
                            {todos.map((todo) => (
                                <li className="flex items-center" key={todo.id}>
                                    <span>{todo.job}</span>
                                    <span className="ml-4 cursor-pointer" onClick={() => handleDelete(todo.id)}>
                                        X
                                    </span>
                                </li>
                            ))}
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
