const express=require('express')
require('./db/config')
const cors=require('cors')
const User=require('./db/User')
const jwt =require('jsonwebtoken')

// const connectDB=async()=>{
//     mongoose.connect('mongodb://localhost:27017/e-comm');
//     const productSchema=new mongoose.Schema({})
//     const product =mongoose.model('products',productSchema)
//     const data=await product.find();
//     console.log(data)
// }
// connectDB()


const app=express()
app.use(express.urlencoded({ extended: false }))


//middleware
app.use(express.json())
app.use(cors())

//jwt




//api
app.post("/register",async(req,res)=>{
    let user=new User(req.body)
    const data = await user.save();
    const payload = {
        user: data,
        token: jwt.sign({secret:"Mani"},"mmmmmmm"),
        message: 'User Registered successfully'
    }
    res.status(201)
    res.send(payload)
})
app.get("/",(req,res)=>{
    res.send("Hello from server")
})

app.listen(3000,()=>{
    console.log("server is running on port 3000 ") 
})