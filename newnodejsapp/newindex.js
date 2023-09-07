import http from "http"

const server=http.createServer((req,res)=>{
    if(req.method=="GET" && req.url=="/hello")
    {
        res.write("Hello from server")
        res.end()
    }
    else
    {
        res.write("404 not found")
        res.end()
    }
   // res.write("Hello from server")
    //res.end()
})
server.listen("5050",()=>{
    console.log("server started")
})
