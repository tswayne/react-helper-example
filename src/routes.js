const express     = require('express');
const controllers = require('./controllers');
const router = express.Router();

router.get('/example', controllers.ExampleController.index);
router.get('/example/partial', controllers.ExampleController.reactAsPartial);
router.get('/example/no-react', controllers.ExampleController.noReact);
router.get('/example/server-render', controllers.ExampleController.serverRender);

exports.router = router;
