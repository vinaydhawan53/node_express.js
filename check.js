// const { log } = require('console');
const express=require('express')
const app=express();
const path = require('path');
app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, '/products.html'));
  });
  app.listen(2000,()=>{
    console.log(" server started");  
  })