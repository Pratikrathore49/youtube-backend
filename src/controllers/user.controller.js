import {asyncHandler} from '../utils/asyncHandler.js'

// const registerUser = asyncHandler(async (req,res)=>{
//     res.staus(200).json({
//         message:'ok'
//     })
// })

const registerUser = asyncHandler(async (req,res)=>{
    return res.status(200).json({
        message:'ok'
    })
})


export {registerUser}