const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const api = require('./routes/api/upload');
const fileUploadRouter = require('./routes/api/upload');
const task = require('./routes/api/task');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/upload', require('./routes/api/upload'));
app.use('/api/task', require('./routes/api/task'));

// Upload

app.use('/public', express.static('public'));
app.use('/api', api);
app.use('/upload', fileUploadRouter);

//task
app.use('/task', task);

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
