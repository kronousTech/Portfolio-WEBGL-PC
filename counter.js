const express = require('express');
const app = express();
let counter = 0;

app.get('/counter', (req, res) => 
{
    counter++;

    res.send(counter.toString());
});

//app.listen(3000, () => console.log('Visitor counter running on port 3000'));