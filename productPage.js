const express = require('express')
const userRouter = express.Router()
userRouter.get('/',(request,response) =>{
    response.send("This is product page")
})
module.exports = userRouter