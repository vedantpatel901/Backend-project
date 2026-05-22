const info = (req,res)=>{
   return res.status(500).json({ 
    message: "Api is working live",
    success: true,
    error: {},
    data: {},
   })
}


module.exports = {
    info
}