let http=require('http');
let port=8000;


http.createServer((req,res)=>{
    res.end("Hello")
}).listen(port,()=>{
    console.log(`Listening to port ${port}`);
})