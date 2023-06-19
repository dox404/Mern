const express=require('express')
require('./Db/index')

const userRouter=require('../router/userRouter')
const app=express()

app.use(express.urlencoded({ extended: false }))

app.use(express.json())


//router
app.use('/',userRouter)


app.listen(5050,()=>{
    console.log("server is started at 5050")
})