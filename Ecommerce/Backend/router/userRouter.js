const express=require('express')
const {homepage,profile,upload}=require('../controller/userController')
const router=express.Router()

router.get('/',homepage)

router.get('/profile',profile)
router.post('/upload',upload)
module.exports=router