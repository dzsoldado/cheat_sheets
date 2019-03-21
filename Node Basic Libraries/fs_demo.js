const fs = require('fs');
const path = require('path');

// Create folder // mkdirSync()
fs.mkdir(path.join(__dirname,"/test"), {}, (err)=>{ 
  if(err) throw err;
  console.log("Folder created");
}); 

// Create and write in file
fs.writeFile(path.join(__dirname,"test", "hello.txt"), "Hello niggaz", err => {
  if(err) throw err;
  console.log('File written');
  // File append
  fs.appendFile(path.join(__dirname,"test", "hello.txt"), "\nEdited !", err => {
    if(err) throw err;
    console.log('File edited');
  });
});

// Read File
fs.readFile(path.join(__dirname, 'test', "hello.txt"), 'utf8', (err,data)=>{
  if(err) throw err;
  console.log(data);
});

// Rename File
fs.rename(path.join(__dirname, 'test', "hello.txt"), path.join(__dirname, 'test', "helloRenamed.txt"), (err)=>{
  if(err) throw err;
  console.log("Renamed");
});

