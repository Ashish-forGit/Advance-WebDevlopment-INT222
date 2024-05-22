const dataString = 'hello world';
const buffer = Buffer.from(dataString,'utf-8');

//accesing the data in buffer

for(const byte of buffer){
    console.log(byte);
}

// modifying the buffer
buffer[7] = Buffer.from('z')[0];

//converted to string
const modifiedString  = buffer.toString("utf-8");
console.log(modifiedString);