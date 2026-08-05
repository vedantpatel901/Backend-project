const info = (req,res)=>{
    return res.status(200).json({ 
    message: "Api is working live",
    success: true,
    error: {},
    data: {},
   })
}


module.exports = {
    info
}