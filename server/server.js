const dotenv = require('dotenv'); // Import dotenv to manage environment variables
const express = require('express'); // Import Express framework
const connectDB = require('./config/db'); // Import the connection function

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express(); //initialize express app
const PORT = process.env.PORT || 5000; // Define the port to run the server on

// Init Middleware to parse JSON bodies
app.use(express.json()); 

app.use('/api/users', require('./routes/api/user')); // Use the user routes

// This handles GET requests to the root URL ('/')
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});