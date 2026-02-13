const http=require('http');
const PORT=4002;
const sum=require('./apiCall')
const server=http.createServer(async(req,res)=>{
    res.setHeader('Access-Control-Allow-Orgin','*');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

   if(req.url=="/msg" && req.method=="GET"){
    res.setHeader('Content-Type',"application/json")
    res.end(JSON.stringify({msg:"Hiii...inside /msg endpoint"}))
   }
   else if(req.url=="/data" && req.method=="GET"){
     res.setHeader('Content-Type',"application/json")
    //  const data={
    //     name:"Rahul",
    //     branch:"IT",
    //     college:"ABES"
    //  }
    const data=await sum();

    res.end(JSON.stringify({msg:data}))

   }
   
   else if(req.url=="/data" && req.method=="POST"){
     res.setHeader('Content-Type',"application/json")
     
     
    res.end(JSON.stringify({msg:"/data post method calling"}))

   }
   else{
    res.setHeader('Content-Type',"text/html")
    res.end("<h2 style=color:red>No endpoint available</h2>")
   }



    })


server.listen(PORT,()=>{
    console.log("Server is live on"+PORT)
})