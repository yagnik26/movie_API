let {Router} = require('express');
const validation = require('../middlewares/validation')

const {get, post, patch, remove} = require('../controller/port')


let router = Router();

router.get('/' , get);

router.post('/data' ,validation , post);

router.patch('/edit/:id' , validation , patch);

router.delete('/dalete/:id' , remove);


module.exports = router;