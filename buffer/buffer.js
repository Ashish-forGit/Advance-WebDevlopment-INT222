const buf1 = Buffer.alloc(10); // create a zero filled buffer
console.log(buf1);

const buf2 = Buffer.alloc(10,1)
console.log(buf2);


const buf3 = Buffer.allocUnsafe(10);
buf3.fill(0)
console.log(buf3);

const buffer1 = Buffer.from("hello😃 ","utf-8");
const buffer2  = Buffer.from("world", "utf-8")


//concatination

const concatBuffer = Buffer.concat([buffer1,buffer2]);
console.log(concatBuffer.toString('utf-8'));


 
const buff6 = Buffer.from('test', 'utf-8')
// hex reprsentations 
const hexRepresentation = buff6.toString('hex')
console.log(hexRepresentation);

// in decimal value of character
for(const byte of buff6){
    const decimalValue = byte.toString();
    console.log(decimalValue);
}