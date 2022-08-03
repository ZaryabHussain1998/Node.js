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
  resp.write(JSON.stringify(data));
  resp.end();
  }).listen(5000);

  //input from cmd
  console.log(process.argv[3])

  //process.argv usage
  //1st create file(writefilesync) oe delete file(unlinksync) 2nd file name 3rd file inner text
  const fs = require('fs');
 //fs.writeFileSync(input[2],input[3]);
  const input = process.argv;
  if(input[2]== 'add')
  {
      fs.writeFileSync(input[3],input[4])
  }else if(input[2]=='remove')
  {
      fs.unlinkSync(input[3])
  }
  else{
      console.log("invalid input")
  }

  //creating files in a loop
  const fs = require('fs');
  const path = require('path');
  const dirPath= path.join(__dirname, 'files');
  for(i=0;i<5;i++)
  {
      fs.writeFileSync(dirPath+"/hello"+i+".txt","this is a text file");
  }
  
  //reading filenames without loop
  const fs = require('fs');
  const path = require('path');
  const dirPath= path.join(__dirname, 'files');
  fs.readdir(dirPath,(err,files)=>{
     //reading in an array
     // console.warn(files)==
     //reading without an array an array
     files.forEach((item)=>{
         console.log("file name is  ",item);
     })
  })


  //CRUD
  //c
  const fs = require('fs');
  const path = require('path');
  const dirPath= path.join(__dirname, 'crud');
  const filePath= `${dirPath}/apple.txt`;
  fs.writeFileSync(filePath, 'this is a simple text file');
  //r
  const fs = require('fs');
  const path = require('path');
  const dirPath= path.join(__dirname, 'crud');
  const filePath= `${dirPath}/apple.txt`;
  fs.readFile(filePath,'utf8',(err,item)=>{
      console.log(item)
  })
  //u
  const fs = require('fs');
  const path = require('path');
  const dirPath= path.join(__dirname, 'crud');
  const filePath= `${dirPath}/apple.txt`;
  fs.appendFile(filePath,' and apple is very higienic fruit',(err)=>{
      if(!err)console.log("file is updated")
  })
  //rename
  const fs = require('fs');
  const path = require('path');
  const dirPath= path.join(__dirname, 'crud');
  const filePath= `${dirPath}/apple.txt`;

  fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
    if(!err)console.log("file is renamed")
})
//d
const fs = require('fs');
  const path = require('path');
  const dirPath= path.join(__dirname, 'crud');
  const filePath= `${dirPath}/apple.txt`;
  fs.unlinkSync(`${dirPath}/fruit.txt`)

//how to resolve asynchronous language drawback

let a=10;
let b=0;
let waitingData= new Promise((resolve,reject)=>{
    setTimeout(() => {
        //complex logic
        resolve(30)
    }, 2000);
    
})
waitingData.then((data)=>{
    b=data;
    console.log(a+b)
})

//Event loop 1 call stack 2 Node APIs 3 Call back queue
console.log("starting up")
setTimeout(()=>{
    console.log("2 second delay")
},2000)
setTimeout(()=>{
    console.log("0 second delay")
},0)
console.log("finishing up")

//express.js framework
const express = require('express');
const app = express();


app.get('',(req,resp)=>{
    resp.send('Welcome, This is home page');
}); 

app.get('/about',(req,resp)=>{
    resp.send('Welcome, This is about page');
});

app.get('/help',(req,resp)=>{
    resp.send('Welcome, This is help page');
});

app.listen(5000);

//req fetching and sending
//alongwith html and json data object is also created and fetched
const express = require('express');
const app = express();


app.get('',(req,resp)=>{
    console.log("data sent by browser",req.query.name)//browser localhost:5000/?name=zaryab
    resp.send("<h1>Welcome, This is home page </h1>"+ req.query.name);
});

app.get("/about",(req,resp)=>{
    resp.send(`
       <input type="text" placeholder="user name"/>
        <button>Click me</button>
        `)
});

app.get('/help',(req,resp)=>{
    resp.send([
        {
        name:'zaryab',
        email:'zaryabhussain72@gmail.com'
    },
    {
        name:'zaryab2',
        email:'zaryabhussain72@gmail.com'
    },
    {
        name:'zaryab3',
        email:'zaryabhussain72@gmail.com'
    },

    ]);
});

app.listen(5000);

//links between the files
//display parameter values on web placeholder="User name" value="${req.query.name}"
const express = require('express');
const app = express();


app.get('',(req,resp)=>{
    resp.send(`
    <h1>'Welcome, This is home page'</h1><a href= "/about">Go To About Page</a>
    `);
}); 

app.get('/about',(req,resp)=>{
    resp.send(`
    <input type="text" placeholder="User name" value="${req.query.name}"/>
    <h1>'Welcome, This is about page'</h1><a href= "/">Go To Home Page</a>
    `);
});

app.get('/help',(req,resp)=>{
    resp.send('Welcome, This is help page');
});

app.listen(5000);

//fetching files from other path like public folder
const express = require('express');
const path = require('path');
const app = express();
const publicPath= path.join(__dirname,'public')
console.log(__dirname)
app.use(express.static(publicPath))


app.listen(5000);

//removing extension through app.get()
//no extention like .html is needed
//ejs module
const express = require('express');
const path = require('path');
const app = express();

const publicPath= path.join(__dirname,'public')
console.log(__dirname)

app.set('view engine','ejs');//loading ejs and install ejs through command npm i ejs
app.get('/profile',(_,resp)=>{
    const user={
        name:'Zaryab',
        email:'zaryab@gmail.com',
        city:'Grw',
        skills:['php','js','c++','java','kotlin','node']
    }
    resp.render('profile',{user});
})
app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
    
})//removing extension through app.get()
app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
    
})
app.get('/help',(_,resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
    
})
app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/404.html`)
    
})

app.listen(5000);

//made header file in login and profile files in views
const express = require('express');
const path = require('path');
const app = express();

const publicPath= path.join(__dirname,'public')
console.log(__dirname)

app.set('view engine','ejs');//loading ejs and install ejs through command npm i ejs
app.get('/profile',(_,resp)=>{
    const user={
        name:'Zaryab',
        email:'zaryab@gmail.com',
        city:'Grw',
        skills:['php','js','c++','java','kotlin','node']
    }
    resp.render('profile',{user});
})
app.get('/login',(_,resp)=>{
    resp.render('login');
});
app.listen(5000);

//using whole app route middleware app.use(reqFilter)
const express=require('express');
const app= express();

const reqFilter=(req,resp,next)=>{
    if(!req.query.age)
    {
        resp.send("Please provide age")
    }
    else if(req.query.age<18)
    {
        resp.send("You can not access this page")
    }
    else
    {
        next();
    }
    console.log('reqFilter');
    next();
}

app.use(reqFilter)
app.get('/',(req,resp)=>{
resp.send('Welcome to home page')    
})
app.get('/users',(req,resp)=>{
    resp.send('Welcome to users page')    
    })
    app.listen(5000);

//using middleware on single route
    const express=require('express');
    const app= express();
    
    const reqFilter=(req,resp,next)=>{
        if(!req.query.age)
        {
            resp.send("Please provide age")
        }
        else if(req.query.age<18)
        {
            resp.send("You can not access this page")
        }
        else
        {
            next();
        }
        console.log('reqFilter');
        next();
    }
    
    //app.use(reqFilter)removing this will work for single and group routes
    app.get('/',(req,resp)=>{
    resp.send('Welcome to home page')    
    })
    app.get('/users',(req,resp)=>{
        resp.send('Welcome to users page')    
    })
    app.get('/about', reqFilter, (req,resp)=>{
            resp.send('Welcome to about page')    
    })
    app.listen(5000); 

    //using middleware on multiple routes
    const express=require('express');
    const reqFilter= require('./middleware');
    const app= express();

    //app.use(reqFilter) removing this will work for single and group routes
    app.get('/',(req,resp)=>{
    resp.send('Welcome to home page')    
    })
    app.get('/users',(req,resp)=>{
        resp.send('Welcome to users page')    
    })
    app.get('/about', reqFilter, (req,resp)=>{
            resp.send('Welcome to about page')    
    })
    app.get('/contact', reqFilter, (req,resp)=>{
        resp.send('Welcome to contact page')    
})
    app.listen(5000);

    //using middleware for group routing

    const express=require('express');
    const reqFilter= require('./middleware');
    const app= express();
    const route= express.Router();

    route.use(reqFilter);
    app.get('/',(req,resp)=>{
    resp.send('Welcome to home page')    
    })
    app.get('/users',(req,resp)=>{
        resp.send('Welcome to users page')    
    })
    route.get('/about', (req,resp)=>{
            resp.send('Welcome to about page')    
    })
    route.get('/contact', (req,resp)=>{
        resp.send('Welcome to contact page')    
})
app.use('/',route);
    app.listen(5000);

    //mongedb connection with node.js
    const{MongoClient}= require('mongodb');
    const url= 'mongodb://localhost:27017';
    const database='e-comm';
    const client= new MongoClient(url);

    async function getData()
    {
        let result= await client.connect();
        let db= result.db(database);
        let collection= db.collection('products');
        let response= await collection.find({name:'iphone8'}).toArray();//find()all data
        console.log(response);
    
    }

    getData(); 

//towards a common connection file to read database data
    const{MongoClient}= require('mongodb');
    const url= 'mongodb://localhost:27017';
    const database='e-comm';
    const client= new MongoClient(url);

    async function dbConnect()
    {
        let result= await client.connect();
        let db= result.db(database);
        return collection= db.collection('products');
    
    }
    dbConnect().then((resp)=>{
        resp.find({}).toArray().then((data)=>{
            console.log(data)
        })
    })

    //==
//   const dbConnect= require('./mongodb')
    
//     const main= async()=>{
//         let data= await dbConnect();
//         data= await data.find({}).toArray();
//         console.warn(data);

//     }
//     main();

    //==
    const dbConnect= require('./mongodb')

    dbConnect().then((resp)=>{
        resp.find({}).toArray().then((data)=>{
            console.log(data)
        })
    })

//Mongoose schemas and models
//Normal static CURD Operation

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/e-comm");

const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String

});

const saveInDB = async () => {
    
    
    const productModel = mongoose.model('products', productSchema);
    let data = new productModel({
        name: "m8",
        brand: "Realme",
        price: 64000,
        category: "mobiles"
    });
    let result = await data.save();
    console.log(result);
}

//saveInDB();

const updateInDB =async ()=>{
    
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.updateOne(
        { name: "y21" },
        {
            $set: { price: 49000, name: 'y21 pro' }
        }
    )
    console.log(data);

}
//updateInDB();

const deleteInDB =async ()=>{
    
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.deleteOne({ name: "m8" });
    console.log(data);
}
//deleteInDB();

const findInDB =async ()=>{
    
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.find();
    console.log(data);
}
findInDB();

//professional CURD APIs with Mongoose
const express= require('express');
require('./config');
const Product= require('./product');//just model is imported

const app= express();
app.use(express.json());
//http://localhost:5000/create
app.post("/create",async(req,resp)=>{
    let data= new Product(req.body);
    let result= await data.save();
    console.log(result)
    resp.send(result);
})
//http://localhost:5000/list
app.get("/list",async(req,resp)=>{
    let data= await Product.find();
    resp.send(data);
})
//http://localhost:5000/delete/62bc1f763cf4e1d9f10d3b11
app.delete("/delete/:_id",async(req,resp)=>{
    console.log(req.params)
    let data= await Product.deleteOne(req.params);
    resp.send(data);
})
//http://localhost:5000/update/62baf5919efda538ddc82715
app.put("/update/:_id",async(req,resp)=>{
    console.log(req.params)
    let data= await Product.updateOne(req.params,
        {$set: req.body}
    );
    resp.send(data);
})

app.listen(5000);

//search with single and multiple record or fields
//http://localhost:5000/search/huawei
const express = require('express');
require('./config');
const Product = require('./product');//just model is imported

const app = express();
app.use(express.json());
app.get("/search/:key", async (req, resp) => {
    console.log(req.params.key)
    let data = await Product.find(
        {
            "$or": [
                { "name": { $regex: req.params.key } },
                { "brand": { $regex: req.params.key } },
                { "category": { $regex: req.params.key } }
            ]
        });
    resp.send(data);
})
app.listen(5000);*/


// const express = require('express');
// const multer = require('multer');

// const app = express();

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             console.log("destination is working")
//             cb(null, 'uploads')
//         },
//         filename: function (req, file, cb) {
//             console.log("filename is working")
//             cb(null, file.fieldname+ "-" +Date.now()+ ".txt")
//         } 
//     })
// });

// app.post("/upload", upload.single('file_name'), (req, resp) => {
//     resp.send("file uploaded")
// })

// app.listen(5000);

var acl = require('acl');
acl = new acl(new acl.mongodbBackend());
acl.allow('guest', 'blogs', 'view')