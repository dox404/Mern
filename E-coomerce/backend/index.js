const express = require('express')
require('./db/config')
const cors = require('cors')
const User = require('./db/User')
const Product = require('./db/Product')
const jwt = require('jsonwebtoken')
const PORT = 5000;
// const connectDB=async()=>{
//     mongoose.connect('mongodb://localhost:27017/e-comm');
//     const productSchema=new mongoose.Schema({})
//     const product =mongoose.model('products',productSchema)
//     const data=await product.find();
//     console.log(data)
// }
// connectDB()


const app = express()
app.use(express.urlencoded({ extended: false }))


//middleware
app.use(express.json())
app.use(cors())

//jwt




app.post("/add-product", async (req, res) => {
    let product = new Product(req.body)
    let result = await product.save()
    res.send(result)
})

//api
app.post("/register", async (req, res) => {
    console.log(req.body)
    let user = new User(req.body)
    // console.log(user)
    let data = await user.save();
    // console.log(data)
    const payload = {
        user: data,
        token: jwt.sign({ secret: "Mani" }, "mmmmmmm"),
        message: 'User Registered successfully'
    }
    // console.log(data)
    res.status(201)
    res.send(payload)
    //// data=data.toObject()
    // delete data.password

})

app.post('/login', async (req, res) => {
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body).select("-password")
        // console.log(user)
        if (user) {
            // const payload = {
            //     user: user,
            //     token: jwt.sign({secret:"Mani"},"mmmmmmm"),
            //     message: 'User Registered successfully'
            // }
            res.send(user)


        } else {
            res.send({ result: "User not found" })
        }
    } else {
        res.send("please enter all feilds..!")
    }

})



app.get("/", (req, res) => {
    const user = localStorage.getItem('user')
    res.send(user)
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})