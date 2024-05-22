const { log } = require("node:console");
const os = require("node:os")
console.log(os.arch()); // os architecture

let mem = os.freemem();  // free memory present 
console.log(mem);
console.log(mem/1073741824); // ing gb

const tmem = os.totalmem(); ///total memory present 
console.log(tmem);
console.log(tmem/1073741824);

console.log(os.hostname()); // returns host name
console.log(os.release()); //returns os release version
console.log(os.tmpdir()); // returns def dir
console.log(os.type());  // retuens name of os