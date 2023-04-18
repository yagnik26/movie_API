const mongoose = require('mongoose');

let connect = async ()=>{
    try {
        console.log("running");
        await mongoose.connect('mongodb+srv://yagnikgoti26:movie@cluster0.sndt5oo.mongodb.net/test');
        console.log("connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect;