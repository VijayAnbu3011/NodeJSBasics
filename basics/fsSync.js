let fs = require('fs')
console.log('fs',fs);
if(!fs.existsSync('demo')){
    fs.mkdirSync('demo')
}
// write in a file
fs.writeFileSync('demo/test.txt','Hello World')
// to read from file 
if(fs.existsSync('demo')){
    let readForm=fs.readFileSync('demo/test.txt')
    console.log("Data from test",readForm.toString());
}else{
    console.log("No floder are present");
}
