const Users =require('../model/users');

const getUsers = async (req,res)=>{
    const users = await Users.find({});
    console.log(users)
    res.status(200).send(users)
}

module.exports = {getUsers}