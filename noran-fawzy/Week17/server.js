require('dotenv').config();
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/hello', (req, res) => {
    res.send("i'm hello routing");
});

app.get('/customer', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/customers', 'customer.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`my server URL: http://localhost:${PORT}`));
