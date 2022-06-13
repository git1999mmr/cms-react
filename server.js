const express = require('express');
//const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const api = require('./routes/api/upload');
const fileUploadRouter = require('./routes/api/upload');
const fileUploadRouteBang = require('./routes/api/upload_bang');
const task = require('./routes/api/task');
const task_bang = require('./routes/api/task_bang');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

//EJS
//app.use(expressLayouts);
//app.set('view engine', 'ejs');

app.use('/public', express.static('public'));
app.use('/api', api);

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/upload', require('./routes/api/upload'));
app.use('/api/task', require('./routes/api/task'));
app.use('/api/upload_bang', require('./routes/api/upload_bang'));
app.use('/api/task_bang', require('./routes/api/task_bang'));

// Upload
//app.use('/upload', fileUploadRouter);
// app.use('/upload_bang', require('./routes/api/upload_bang'));

//task
app.use('/task', task);
app.use('/task_bang', task_bang);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
