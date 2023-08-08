const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000;

// Use Middleware
app.use(cors());
app.use(express.json())



app.get('/', (req, res) => {
    res.send('Food is cooking')
})

app.listen(port, () =>{
    console.log(`Food is cooking on port ${port}`)
})


// SadakatHossain
// G7A1QQnXWMyxdI3X