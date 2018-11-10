const http = require('http');
const fs = require('fs');
const express = require('express');
const path = require('path');

var app = express()

const hostname = '127.0.0.1';
const port = 3000;

// The following line will access the "serve" directory and serve the index.html file
app.use(express.static(__dirname +'/serve')); 



app.listen(port);