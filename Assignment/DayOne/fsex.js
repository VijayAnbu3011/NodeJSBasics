let fs=require('fs')

if(!fs.existsSync('Demo')){
    fs.mkdirSync('Demo')
}
// to create txt file
fs.writeFileSync('Demo/fine.txt',"Donot see others")
// to add data in file
fs.appendFileSync('Demo/fine.txt',"  Allway Be Happy  ")
// to read that document
let readed=fs.readFileSync('Demo/fine.txt')
console.log('read file',readed.toString());