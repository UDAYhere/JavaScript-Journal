let process= require('process');

// console.log(process.argv);

for(let i=0;i<process.argv.length;i++){
    console.log("hello to "+process.argv[i]);
}