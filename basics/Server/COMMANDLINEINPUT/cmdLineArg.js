let fs=require('fs')
let args=process.argv
console.log('args',args);

if(args[2]==='add'){
    fs.writeFileSync(args[3],args[4])
}else if(args[2]==='remove'){
    fs.unlinkSync(args[3])
}else if(args[2]==='addon'){
    fs.appendFileSync(args[3],args[4])
} 