const express = require('express')
const app = express();
const port = 8000;



app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader('Access-Control-Allow-Methods', "GET , POST, PATCH, DELETE, OPTIONS")
    next();
});

app.get('/sum' ,(req,res)=>{
    let a = req.query.a;
    let b = req.query.b;
    if(isNaN(a) || isNaN(b)){
      return  res.status(400).json({
            errorMessage : "Please enter valid numbers"
        })
    }   
    let x = parseInt(a) + parseInt(b);
   return res.status(200).json({
        message : "Success",
        result : x
    })

});
app.listen(port,()=>{
    console.log("Application runing at port 8000");
})