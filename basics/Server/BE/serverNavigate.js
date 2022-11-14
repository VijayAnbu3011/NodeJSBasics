let http=require('http')
let port=8000
let handler=require('./handle')



http.createServer(handler.requestHandler).listen(port,()=>{
    console.log(`Server Listening on Port ${port}`);
})
