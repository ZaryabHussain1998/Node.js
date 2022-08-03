const dbConnect= require('./mongodb')

const insert= async ()=>{
    const db= await dbConnect();
    const result= await db.insert(
        [
        {name:'note 1',brand:'AOne',price:26000,category:'mobiles'},
        {name:'note 2',brand:'AOne',price:27000,category:'mobiles'},
        {name:'note 3',brand:'AOne',price:28000,category:'mobiles'},
        {name:'note 4',brand:'AOne',price:29000,category:'mobiles'},
        ]
    );
    console.log(result)
}
insert();