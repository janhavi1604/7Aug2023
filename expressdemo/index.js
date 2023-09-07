import express from 'express'
import path from 'path'
const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello from express app")
})

app.get("/home",(req,res)=>{
     //res.sendFile("\Users\Janhavi Mudaliar\expressdemo\index.html")
    res.sendFile('expresssdemo/index.html')
    
})

app.post("/data",(req,res)=>{
    console.log(req.body)
})
const server=app.listen(5059,()=>{
    console.log(server.address().address)
    console.log(server.address().port)
    //console.log("app listing on port 5059")
})