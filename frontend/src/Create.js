import React, { useState } from 'react';
import axios from 'axios';

function Create() {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    axios.post('http://localhost:3001/add', { task: task })
      .then(result => {
       
        console.log('Task added successfully:', result.data);

        
        setTask('');

       
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
