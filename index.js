const express=require('express');
const dotEnv=require('dotenv');
const mongoose=require('mongoose');
const vendorRoutes=require('./routes/vendorRoutes')
const bodyParser=require('body-parser');
const firmRoutes=require('./routes/firmRoutes');

const app=express();

const PORT=4000;

dotEnv.config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("connected to database successfully"))
.catch((error)=>console.log(error));

app.use(bodyParser.json());
app.use('/vendor',vendorRoutes);
app.use('/firm',firmRoutes);

app.listen(PORT, ()=>{
    console.log(`server started and runing at ${PORT}`);
})

app.use('/home',(req,res)=>{
    res.send("<h1>this is manikanta</h1>");
})