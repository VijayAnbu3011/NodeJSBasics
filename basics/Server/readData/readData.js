let fs=require('fs')
let http=require('http')
let port=7000

http.createServer((request,response)=>{
    if(request.url==='/'&& request.method==='GET'){
        fs.readFile('./view/view.txt',(err,data)=>{
            if(err){
                response.writeHead(404,{
                    "content-type":"text/plain"
                })
                response.end('File Not Found')
            }else{
                response.writeHead(200,{
                    "content-type":'text/html'
                })
                response.end(`<h1>${data}</h1>`)
            }
        })
    }else{
        response.writeHead(404,{
            "content-type":"text/plain"
        })
        response.end('Invalid URL')
    }

}).listen(port,()=>{
    console.log(`Server Listening on Port ${port}`);
})