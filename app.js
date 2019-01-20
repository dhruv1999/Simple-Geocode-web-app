const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const port=2000;

app.listen(port,()=> console.log(`server started on port  ${port}`));