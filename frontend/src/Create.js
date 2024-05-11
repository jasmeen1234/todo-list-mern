import React, { useState } from 'react';
import axios from 'axios';

function Create() {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    axios.post('http://localhost:3001/add', { task: task })
      .then(result => {
        // Assuming the task was successfully added to the server
        console.log('Task added successfully:', result.data);

        // Clear the input field after successful submission
        setTask('');

        // Optionally, you can update the UI by fetching updated data
        // Example: Call a function passed as a prop to refresh the todo list
        // refreshTodoList(); // Define this function in the parent component
      })
      .catch(err => {
        console.log('Error adding task:', err);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Task"
      />
      <button type="button" onClick={handleAdd}>
        Submit
      </button>
    </div>
  );
}

export default Create;
