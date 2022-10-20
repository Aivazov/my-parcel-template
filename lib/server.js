"use strict";

const express = require('express');
const app = express();
app.use('*', (req, res) => {
  console.log('There was a server request');
  res.send(`<h1>My response here</h1>`);
});
const listener = app.listen(4444, () => {
  console.log(`The server was started on the ${listener.address().port}`);
});
console.log('I am Node');