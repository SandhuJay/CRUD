const mysql=require('mysql');

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'demo'


  
});

 module.exports =con;
// con.connect((err)=>{
//     if(err){
//         console.warn('error')
//     }
//     else{
//         console.log('connected')
//     }

// })
// con.query("select * from user",(err,res)=>{
//     console.log(res);
// })

