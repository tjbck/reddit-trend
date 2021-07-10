const express = require('express')
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const history = require('connect-history-api-fallback');
const moment = require('moment');


const app = express();
let server = require('http').createServer(app);

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
});

app.use(history());
app.use(express.static(path.join(__dirname, '/front/build')));

let PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`))