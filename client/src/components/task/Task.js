import React, { useState, useEffect } from 'react';
import { Paper, TextField } from '@material-ui/core';
import { Checkbox, Button } from '@material-ui/core';

import { addTask, getTasks, updateTask, deleteTask } from './taskServices';
import '../../App.css';

export const Task = () => {
  const [currentTask, setCurrentTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const { data } = await getTasks();
        this.setState({ tasks: data });
      } catch (error) {
        console.log(error);
      }
    }
    fetchTasks();
  }, []);

  const handleChange = (e) => {
    setCurrentTask(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const originalTasks = tasks;
    try {
      const { data } = await addTask({ task: currentTask });
      const tasks = originalTasks;
      tasks.push(data);
      setTasks({ tasks });
      setCurrentTask({ currentTask });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (currentTask) => {
    const originalTasks = tasks;
    try {
      const tasks = [...originalTasks];
      const index = tasks.findIndex((task) => task._id === currentTask);
      tasks[index] = { ...tasks[index] };
      tasks[index].completed = !tasks[index].completed;
      setTasks({ tasks });
      await updateTask(currentTask, {
        completed: tasks[index].completed
      });
    } catch (error) {
      setTasks({ tasks: originalTasks });
      console.log(error);
    }
  };

  const handleDelete = async (currentTask) => {
    const originalTasks = tasks;
    try {
      const tasks = originalTasks.filter((task) => task._id !== currentTask);
      setTasks({ tasks });
      await deleteTask(currentTask);
    } catch (error) {
      setTasks({ tasks: originalTasks });
      console.log(error);
    }
  };

  return (
    <div className="todo_app todo_flex">
      <Paper elevation={3} className="todo_container">
        <div className="todo_heading">TO-DO</div>
        <form
          onSubmit={handleSubmit}
          className="todo_flex"
          style={{ margin: '15px 0' }}
        >
          <TextField
            variant="outlined"
            size="small"
            style={{ width: '80%' }}
            value={currentTask}
            required={true}
            onChange={handleChange}
            placeholder="Add New TO-DO"
          />
          <Button
            style={{ height: '40px' }}
            color="primary"
            variant="outlined"
            type="submit"
          >
            Add task
          </Button>
        </form>
        <div>
          {tasks.map((task) => (
            <Paper key={task._id} className="todo_flex task_container">
              <Checkbox
                checked={task.completed}
                onClick={() => handleUpdate(task._id)}
                color="primary"
              />
              <div className={task.completed ? 'task line_through' : 'task'}>
                {task.task}
              </div>
              <Button onClick={() => handleDelete(task._id)} color="secondary">
                delete
              </Button>
            </Paper>
          ))}
        </div>
      </Paper>
    </div>
  );
};