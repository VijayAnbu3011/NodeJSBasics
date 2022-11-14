let fs=require('fs')

let writeData=()=>{
    fs.writeFile('view/view.txt','beautiful view',(err)=>{
        if(err){
            console.log("err",err);
        }else{
            console.log("data written sucessful")
            fs.readFile('view/view.txt',(err,data)=>{
                if(err){
                    console.log("err",err);
                }else{
                    console.log("data",data.toString());
                }
            });
        }
    })
}
fs.exists("view",(exists)=>{
    if(!exists){
        fs.mkdir("view",(err)=>{
            if(err){
                console.log("err",err);
            }else{
                console.log("Floder created sucessfully");
            writeData()
            }
        })
    }else{
        writeData()
    }
})