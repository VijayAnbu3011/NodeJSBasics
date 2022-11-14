let fs=require('fs')

let writeData=()=>{
    fs.writeFile("anbu/text.txt","Hello Darling",(err)=>{
        if(err){
            console.log("error",err);
        }else{
            console.log("data written successfully");
            fs.readFile('anbu/text.txt',(err,data)=>{
                if(err){
                    console.log("error",err);
                }else{
                    console.log("readed succesfully",data.toString());
                }
            })
        }
    })
}

fs.exists('anbu',(exists)=>{
    if(!exists){
     fs.mkdir("anbu",(err)=>{
         if(err){
             console.log("Error",err);
         }else{
             console.log("floder created");
             writeData()
         }
     })
    }
    else{
        console.log("all ready exists");
        writeData()
    }
})