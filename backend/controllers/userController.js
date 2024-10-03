import User from "../models/userModel.js"
import jwt from 'jsonwebtoken'

export const deleteUser = async (req,res) =>{
    const user = await User.findById(req.params.id);

    const token = req.cookies.accessToken
    if(!token) return res.status(401).send("You are not authenticated!")
    jwt.verify(token,process.env.JWT_KEY,async(error,payload)=>{
        if (payload.id!==user._id.toString()) {
            return res.status(403).send("You can only delete your Account!")
        }
        else {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).send("User deleted Successfully")
        }
    })

}

export const test = async (req, res) =>{

}