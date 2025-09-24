const url ="https://api.github.com/users/Vijay-pratap7009";
const Pr=fetch(url);
Pr.then((response)=>{ 
    return response.json()})
.then((data)=>{console.log("Data:",data);})
.catch((err)=>{console.log("Error:",err);})
.finally(()=>{console.log("fetching done");})

