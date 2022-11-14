let http=require('http')
let port=8000

let server=http.createServer((request,response)=>{
    console.log('request',request);
    response.write("Hello World From Mars \n")
    response.write("Listen to me \n")
    response.end("Response Ended ")
})
server.listen(port,()=>{
    console.log(`Server Listening on Port ${port}`);
})