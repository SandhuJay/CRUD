const express =require('express');
const app=express();
const con=require("./confile");
app.use(express.json())
app.get("/",(req,resp)=>{
    con.query("select * from user",(err,res)=>{
        if(err){
            resp.send('error');
        }
        else{
            resp.send(res);
        }
    })
})

app.post("/",(req,resp)=>{
   // const data ={age:24,rollno:12341,mobileno:987654321,enrollno:4567821}
   const data =req.body;
    con.query("INSERT INTO user SET ? ",data,(err,res,field)=>{
        if(err) throw error;
        resp.send(res);
        
    })
})
app.put("/",(req,resp)=>{
    const data =["sam",22,"jos123",1233]
    con.query("UPDATE user SET Name=?,Age=?,Password=? WHERE ID=?",data,(error,rest,field)=>{
        if(error) throw error;
        resp.send(rest);

    })
})
app.delete("/:ID",(req,resp)=>{
    con.query("DELETE FROM user WHERE ID="+req.params.ID,(err,res,field)=>{
        if(err) throw error;
        resp.send(res)
    })
   // resp.send(req.params.ID)
});
app.listen(5000);