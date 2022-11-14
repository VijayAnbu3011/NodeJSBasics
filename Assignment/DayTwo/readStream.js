let fs=require('fs')

let readStream=fs.createReadStream("./nothing/nothing.txt",{
    highWaterMark:1
})
readStream.on("start",()=>{
    console.log("Streaming started");
})
readStream.on('data',(chunk)=>{
    console.log('chunk',chunk.toString());
})
readStream.on("end",()=>{
    console.log("Streaming Stoped");
})
readStream.on("error",(err)=>{
    console.log("error",err);
})    