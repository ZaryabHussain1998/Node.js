/*
//import export and filter function
const app = require('./app')
console.log(app.z())
const arr=[1,2,3,4,4,455,45,344]
let result =arr.filter((item)=>{
    return item<=4
})
console.warn(result)


//core Modules
const fs = require('fs').writeFileSync;
console.log(__filename)
fs("hello3.txt","i am here")

//create server
const http = require('http');
http.createServer((req,resp)=>{
    resp.write("<h1>Hello this is Zaryab Hussain")
    resp.end();
}).listen(4500);

//difference between regular function and arrow
   function regular(a)
   {
       return a*10;
   }
   
   console.log(regular(5));
   const arrowpure = (a)=>a*4;
   console.log(arrowpure(5));

   //color package installed,imported and used
   console.log("package.json")
   const colors = require('colors');
   console.log("hello".red);
   
   //chalk package installed,imported and used
   const chalk = require('chalk');
   const log = console.log;
   
   // Combine styled and normal strings
   log(chalk.blue('Hello') + ' World' + chalk.red('!'));
   
   // Compose multiple styles using the chainable API
   log(chalk.black.bgRed.bold('Hello world!'));
   
   // Pass in multiple arguments
   log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

   //file imported for API response
  const http = require('http');
  const data = require('./data');
  
  http.createServer((req,resp)=>{
  resp.writeHead(200,{'Content-type':'application\json'});
  resp.write(JSON.stringify({name:'Zaryab Hussain',email:'zaryabhussain72@gmail.com'}));
  resp.end();
  }).listen(5000);

  //input from cmd
  console.log(process.argv[3])*/

  //process.argv usage
  //1st create file(writefilesync) 2nd file name 3rd file inner text
  const fs = require('fs');
  const input = process.argv;
  if(input[2]== 'add')
  {
      fs.writeFileSync(input[3],input[4])
  }else if

  fs.writeFileSync(input[2],input[3]);



   