const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');
const app = express();

app.use(express.json());
//reading data from DB on terminal and localhost
app.get('/', async (req, resp) => {
    let data= await dbConnect();
    data= await data.find({}).toArray();
    console.log(data);
    resp.send(data)
});
////sending data from postman body to terminal and postman console
// app.post('/',(req,resp)=>{
//     console.log(req.body);
//     resp.send(req.body)
// });

//inset data from postman to mongodb compass
app.post('/',async(req,resp)=>{
    console.log(req.body);
    let data= await dbConnect();
    let result= await data.insert(req.body)
    
    resp.send(result)
});

////update a record
// app.put('/',async (req,resp)=>{
//     let data= await dbConnect();
//     let result= await data.updateOne(
//         {name:"y20"},
//         {$set:{price:45000}}
//         )
//     resp.send({result:"update"})
// });

////update data dynamically through postman body(go to postman and update the record through name as key )
// app.put('/',async (req,resp)=>{
//     let data= await dbConnect();
//     let result= await data.updateOne(
//         {name:req.body.name},
//         {$set:req.body}
//         )
//     resp.send({result:"update"})
// })

//updating the name of a record through postman parameter
app.put("/:name",async (req,resp)=>{
        let data= await dbConnect();
        let result= await data.updateOne(
            {name:req.params.name},
            {$set:req.body}
            )
        resp.send({result:"update"})
    });

    //delete a record through the id fetched through postman params(copied from compass)
    //in professional project a record which has to be deleted will adhere its id first through get()
    app.delete("/:id",async(req,resp)=>{
        console.log(req.params.id)
        let data= await dbConnect();
        let result= await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
        resp.send(result)
    })

app.listen(5000)

