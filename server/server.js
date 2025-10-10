// Import Express framework
const express = require('express'); 

//initialize express app
const app = express(); 

// Define the port to run the server on
const PORT = process.env.PORT || 5000; 

// This handles GET requests to the root URL ('/')
app.get('/', (req , res ) => {
    res.send('API is running...');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});