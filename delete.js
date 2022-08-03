const dbConnect= require('./mongodb');

const deleteData= async ()=>{
    let data= await dbConnect();
    let result= await data.deleteMany({name:'note 1'})//deleteOne() is used to delete a single record
    console.log(result);
    if(result.acknowledged)
    {
        console.log("Records are deleted")
    }
}

deleteData();