let {Router} = require('express');

const {get, post, patch, remove} = require('../controller/port')


let router = Router();

router.get('/' , get);

router.post('/data' , post);

router.patch('/edit/:id' , patch);

router.delete('/dalete/:id' , remove);


module.exports = router;