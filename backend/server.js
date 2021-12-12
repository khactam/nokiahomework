const express = require('express');
const app = express();
const port = process.env.PORT || 5000; 
const path = require("path");

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route for testing
app.get('/express_backend', (req, res) => { 
  res.send({ express: 'Test connect with react success' }); 
});
app.use(express.static(__dirname + '/build'));
// register static reactapp
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});