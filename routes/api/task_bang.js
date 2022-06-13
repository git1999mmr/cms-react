const TaskBang = require('../../models/Task_bang');
const express = require('express');
const axios = require('axios');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

router.post('/', async (req, res) => {
  try {
    const task = await new TaskBang(req.body).save();
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const tasks = await TaskBang.find();
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const task = await TaskBang.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
