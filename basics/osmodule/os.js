let os=require('os')

let arch=os.arch();
console.log("arch",arch);

let cpu=os.cpus()
console.log("cpu",cpu);

let platForm=os.platform()
console.log("platForm",platForm);

var free_memory = os.freemem();
var free_mem_in_kb = free_memory/1024;
console.log(free_mem_in_kb);
var free_mem_in_mb = free_mem_in_kb/1024;
console.log(free_mem_in_mb);
var free_mem_in_gb = free_mem_in_mb/1024;
console.log(free_mem_in_gb);
   
free_mem_in_kb = Math.floor(free_mem_in_kb);
free_mem_in_mb = Math.floor(free_mem_in_mb);
free_mem_in_gb = Math.floor(free_mem_in_gb);

free_mem_in_mb = free_mem_in_mb%1024;
console.log(free_mem_in_mb);
free_mem_in_kb = free_mem_in_kb%1024;
console.log(free_mem_in_kb);
free_memory = free_memory%1024;
  
console.log("Free memory: " + free_mem_in_gb + "GB "
      + free_mem_in_mb + "MB " + free_mem_in_kb
      + "KB and " + free_memory + "Bytes");