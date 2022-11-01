const express=require('express');
const PORT=3000;
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
// mongoose.connect("mongodb://localhost:27017/node-demo").then(()=>
// console.log("Db connected")).catch(err=>console.log("error"))

var Register = require('./models/registermodel')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());


app.post('/54.202.218.249:9501/api/users', (req,res)=>{

    var myData=new Register(req.body);
    console.log(req.body);
    myData.save()
    .then(item=>{
        res.status(200).send(item)
        
    })
    .catch(err=>{
        res.status(400).send("unable to save")
    })
    });
    
app.get('/54.202.218.249:9501/api/users',async(req,res)=>{
        var data=await Register.find();
        res.json(data)
    });
   

app.get('/54.202.218.249:9501/api/users/:id',async(req,res)=>{
        try{
    const allData=await Register.findById(req.params.id);
    return res.json(allData);
        }
        catch(err){
            console.log(err.message);
        }
    });
        
app.delete('/54.202.218.249:9501/api/users/:id',async(req,res)=>{
        try{
    await Register.findByIdAndDelete(req.params.id);
    return res.send(await Register.find());
        }
        catch(err){
            console.log(err.message);
        }
    });
    

    
app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`);
})

