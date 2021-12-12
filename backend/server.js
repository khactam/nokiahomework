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

app.get('/listdata', (req, res) => {
    let responseObject = randomProcessObject();
    res.send({
        response: generateResponse()
    });
});
app.use(express.static(__dirname + '/build'));
// register static reactapp
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

function generateResponse() {
    let response = [];
    let randomNumberOfChildProcess = randomIntFromInterval(5, 10);
    for (let i = 0; i < randomNumberOfChildProcess; i++) {
        response.push(randomProcessObject());
    }
    return response;
}

function randomProcessObject() {
    let today = new Date();
    let generatedChildProcess = {
        operation: 'CHILD-OPERATION-' + Math.floor((Math.random() * 1000) + 1000),
        scope: 'A/B/C',
        timeStamp: today,
        status: randomIntFromInterval(1, 3),
        grandChild: []
    }
    let randomNumberOfGrandChildren = randomIntFromInterval(1, 3);
    for (let i = 0; i < randomNumberOfGrandChildren; i++) {
        let generatedGrandChild = {
            operation: 'GRANDCHILD-OPERATION-' + i,
            scope: 'A/B/C',
            timeStamp: today,
            status: randomIntFromInterval(1, 3)
        }
        generatedChildProcess.grandChild.push(generatedGrandChild);
    }
    return generatedChildProcess;
}
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}