const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    task: {
      type: String,
      required: true
    },
    task_ts: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  {
    collection: 'progress_bang'
  }
);

module.exports = mongoose.model('progress_bang', taskSchema);
