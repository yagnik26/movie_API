const express = require('express');
const { db } = require('../models/movie.schema');
const movie = require('../models/movie.schema');

let app = express();

let get = async (req,res) => {
    try {
        res.status(200).send(await movie.find());
    } catch (error) {
        console.log(error);
    }
};

let post = async (req,res) => {
    try {
        await movie.create(req.body);
        res.send('data save done')  
    } catch (error) {
        console.log('invalide data ');
    }
};

let patch = async (req,res) => {
    let {id} = req.params;
    let data = req.body;
    try {
        await movie.findByIdAndUpdate(id , data);
        console.log('updating done');
    } catch (error) {
        console.log('error');
    }
};

let remove = async (req,res) => {
    let {id} = req.params;

    try {
        await movie.findByIdAndRemove(id);
        console.log('delete successfully');
    } catch (error) {
        console.log('id not found');
    }
};

module.exports = {get, post, patch, remove};