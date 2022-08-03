const dbConnect= require('./mongodb')

const updateData= async ()=>{
    const data= await dbConnect();
     const result= await data.update(//updateOne() is used to update a single record
    //     [
        {name:'note 2'},{
       $set: {name:'note 2 prime'}
    //     {name:'note 3',brand:'AOne',price:28000,category:'mobiles'},
    //     {name:'note 4',brand:'AOne',price:29000,category:'mobiles'},
    //     ]
    }
    );

    console.log(result)

 }

 updateData();