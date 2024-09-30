import User from '../models/userModel.js'
import bcrypt from 'bcrypt'

export const register = async(req,res)=>{
    try {
        const hash = bcrypt.hashSync(req.body.password, 5);
        const newUser = new User({
            ...req.body,
            password: hash,
        })
        await newUser.save()
        res.status(201).send("User registered successfully")
    } catch (error) {
        res.status(500).send('Error in Register User => '+error.message)
    }
}
export const login = async(req,res)=>{
    try {
        const user = await User.findOne({username: req.body.username})
        if(!user) return res.status(404).send("User not found")
        
        const validPassword = bcrypt.compareSync(req.body.password, user.password)
        if(!validPassword) return res.status(404).send("User credentials doesn't match.")
        const {password,...info} = user._doc
        res.status(200).send(info)

    } catch (error) {
        res.status(500).send('Error in Login User => '+error.message)
    }
}
export const logout = async(req,res)=>{
    
}