const route = require('express')();

// * config we need for using multer
// const upload = require('../utils/multer');
const {
    getAll,
	getOne,
	create,
	update,
	remove,
} = require('../controllers/user.controller');


// * Get all Method
route.get('/', getAll);

// * Get by ID Method
route.get('/:id', getOne);

// * Post Method if include image
// route.post('/post', upload, post);

// * Post Method
route.post('/create', create);

// * Update by ID Method
route.patch('/update/:id', upload, update);

// * Delete by ID Method
route.delete('/delete/:id', remove);

module.exports = route;
