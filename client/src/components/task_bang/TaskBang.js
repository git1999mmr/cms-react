import React, { useState, useEffect } from 'react';
import { Paper, TextareaAutosize } from '@material-ui/core';
import { Checkbox, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTask, getTasks, updateTask, deleteTask } from './taskServices_bang';
import '../../App.css';

export const TaskBang = () => {
  const [currentTask, setCurrentTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  const handleChange = (e) => {
    setCurrentTask(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const originalTasks = tasks;
    try {
      const data = await addTask({
        task: currentTask,
        task_ts: new Date().toLocaleString()
      });
      const tasks = originalTasks;
      tasks.push(data.data);
      setTasks(tasks);
      setCurrentTask([]); //[object, Object] cleared
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
      setTasks(tasks);
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
      setTasks(tasks);
      await deleteTask(currentTask);
    } catch (error) {
      setTasks({ tasks: originalTasks });
      console.log(error);
    }
  };

  return (
    <div
      className="todo_app todo_flex"
      style={{
        marginTop: '5%'
      }}
    >
      <Paper elevation={3} className="todo_container">
        <div className="todo_heading">Progress List </div>
        <form
          onSubmit={handleSubmit}
          className="todo_flex"
          style={{ margin: '10px 0' }}
        >
          <TextareaAutosize
            className="todo_field"
            variant="outlined"
            size="largest"
            style={{
              width: '100%',
              height: '300px',
              fontSize: '1.5rem',
              padding: '0.5%',
              overflow: 'scroll'
            }}
            value={currentTask}
            required={true}
            onChange={handleChange}
            placeholder="Add your progress here"
          />
          <Button
            style={{
              height: '40px',
              backgroundColor: 'yellow',
              padding: '3%',
              margin: '1%',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}
            color="primary"
            variant="outlined"
            type="submit"
          >
            Add progress
          </Button>
        </form>
        <div style={{ fontWeight: 'light' }}>
          {tasks &&
            tasks.map((task) => (
              <Paper key={task._id} className="todo_flex task_container">
                <Checkbox
                  checked={task.completed}
                  onClick={() => handleUpdate(task._id)}
                  color="primary"
                />
                <div> {task.task_ts}</div> <br />
                <div className={task.completed ? 'task line_through' : 'task'}>
                  {task.task}
                </div>
                <Button
                  onClick={() => handleDelete(task._id)}
                  color="secondary"
                  style={{ fontWeight: 'bold' }}
                >
                  delete
                </Button>
              </Paper>
            ))}
        </div>
      </Paper>
    </div>
  );
};

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div
      className="todo_app todo_flex"
      style={{
        marginTop: '5%'
      }}
    >
      <Paper elevation={3} className="todo_container">
        <div className="todo_heading">Progress List</div>

        <div style={{ fontWeight: 'light' }}>
          {tasks &&
            tasks.map((task) => (
              <Paper key={task._id} className="todo_flex task_container">
                <Checkbox checked={task.completed} color="primary" />
                <div> {task.task_ts}</div> <br />
                <div className={task.completed ? 'task line_through' : 'task'}>
                  {task.task}
                </div>
              </Paper>
            ))}
        </div>
      </Paper>
    </div>
  );
};

TaskBang.propTypes = {
  auth: PropTypes.object
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(TaskBang);
