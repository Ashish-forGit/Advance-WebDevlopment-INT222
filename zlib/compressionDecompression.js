const zlib= require('zlib')
const input = 'hello world'
zlib.gzip(input,(err,compressedData)=>{
    if(err){
        console.error("error compressed date: ",err);
        return;
    }
    console.log(compressedData);
    zlib.gunzip(compressedData , (err, decompressedData)=>{
        if(err){
            console.log("error decompressing data",err);
            return
        }
        console.log("Decompresseed Data ", decompressedData.toString());

    })
})