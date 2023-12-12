const User = require('../models/userModel');
const Timer = require('../models/timerModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); 
const saltRounds = 10;
require('dotenv').config();
const JWT_KEY='azertyuiop';

exports.hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw error;
    }
};


exports.userRegister = async(req,res) => {
    try {
        let newUser = new User(req.body);
        const user = await newUser.save();
        res.status(201).json({message : `User créé : "${user.email}`})
    }
    catch (error){
        console.log(error);
        res.status(401).json({message : "Requete invalide"});
    }
}

exports.loginRegister = async(req, res) => {
    try {
        const user = await User.findOne({email: req.body.email})
        if(!user) {
            res.status(500).json({message : 'user non trouvé'});
            return;
        }
        if(user.email === req.body.email && user.password === req.body.password) {
                const userData = {
                    id: user._id,
                    email: user.email,
                    role: user.role
                }
            
                const token = await jwt.sign(userData, JWT_KEY, {expiresIn: "10h" })
                res.status(200).json({token});
            }
            else {
                res.status(401).json({message : "email ou pw incorrect"});
            }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({message : "impossible de generer le token"});
    }
        
}


exports.updateRegister = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params._id, req.body, {new: true});
        res.status(200);
        res.json(user);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur" })
    }
};

exports.deleteRegister = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params._id);
        res.status(200);
        res.json({message: 'User supprimée'});
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur" })
    }
}
    