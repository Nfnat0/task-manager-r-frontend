import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createTask } from '../api/taskApi';
import './AddTaskForm.css';

const AddTaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [label, setLabel] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = await createTask({ title, description, priority, label, dueDate });
    if (onAdd) {
      onAdd(newTask);
    }
    setTitle('');
    setDescription('');
    setPriority('');
    setLabel('');
    setDueDate('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="add-task-form">
      <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth />
      <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth />
      <TextField label="Priority" value={priority} onChange={(e) => setPriority(e.target.value)} fullWidth />
      <TextField label="Label" value={label} onChange={(e) => setLabel(e.target.value)} fullWidth />
      <TextField label="Due Date" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} InputLabelProps={{ shrink: true }} fullWidth />
      <Button type="submit" variant="contained" color="primary">Add Task</Button>
    </Box>
  );
};

export default AddTaskForm;