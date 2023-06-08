const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/meanStackTutorial', { useNewUrlParser: true, useUnifiedTopology: true });

// Use body-parser middleware
app.use(bodyParser.json());

// Routes
app.use('/api/items', require('./routes/items'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
