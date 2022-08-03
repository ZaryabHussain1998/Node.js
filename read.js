// const dbConnect= require('./mongodb')

// dbConnect().then((resp)=>{
//     resp.find({}).toArray().then((data)=>{
//         console.log(data)
//     })
// })
  const dbConnect= require('./mongodb')
    
    const main= async()=>{
        let data= await dbConnect();
        data= await data.find({}).toArray();
        console.warn(data);

    }
    main();