const express =require('express');
const router = express.Router();
const db=require("../config/db");



router.get("/",(req,res)=>{
    
     var id=req.query.id;
     console.log(id);
     var query = 'SELECT email FROM owners';
     console.log(query);
 
     db.query(query,function(error, rows,fields){
         if(error)console.log(error);
 
         else{
             console.log(rows);
             res.send(rows);
         }
     });
     
 });

module.exports=router;   