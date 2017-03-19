const express     = require('express');
const controllers = require('./controllers');
const router = express.Router();

router.get('/example', controllers.ExampleController.index);
router.get('/example/no-react', controllers.ExampleController.noReact);

exports.router = router;
