
const movie = require('../models/movie.schema');

let validation = async (req,res,next) => {
    console.log(__dirname + '/movie.schema');
    let data = req.body
    console.log(data);
    if(data.Name && data.Year && data.Rating && data.Poster && data.Country && data.Language && data.Genre)
    {

        let user = await movie.findOne({Name:data.Name}) || ''
        if(user.Name)
        {
            res.status(400).send('already exists')
        }
        else{
            console.log(user);
            next()
        }
    }
    else{
        res.status(400).send("enter valid data")
    }
}

module.exports = validation;