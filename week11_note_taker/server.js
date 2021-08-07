const express = require('express');
const app = express();
const webRouter = require('./routes/web');
const apiRouter = require('./routes/api');
const path = require('path');

// environment var
const PORT = process.env.PORT || 3001; 

app.use(express.static('public'));
app.use(express.json());

app.use(webRouter);
app.use(apiRouter);


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "404.html"));
});


app.listen(PORT, () => {
    console.log('app is running at http://localhost:' + PORT );
})

