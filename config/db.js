const mongoose = require('mongoose');

let connect = async ()=>{
    try {
        console.log("running");
        await mongoose.connect('mongodb+srv://yagnik:movie@cluster0.oubezfv.mongodb.net/test',{
            useNewUrlParser : true,
            useUnifiedTopology : true
        });
        console.log("connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect;