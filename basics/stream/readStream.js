let fs=require('fs')

let readStream=fs.createReadStream('./view/view.txt',{
    highWaterMark:12
})
readStream.on('open',()=>{
    console.log('stream opened');
})
readStream.on('data',(chunk)=>{
    console.log('chunk',chunk.toString());
})
readStream.on('end',()=>{
    console.log("stream end");
})
readStream.on('error',(err)=>{
    console.log("error happend while streaming",err);
})