/**
 * Module dependencies
 */
let controller = require('../controllers/authuser.controller');
let middleware = require('../middlewares/AuthUser.middleware');
/**
 * the new Router exposed in express 4
 * the indexRouter handles all requests to the `/` path
 */
module.exports = function(router) {
    router.route('/Login')
        .post(controller.login);
	router.route('/allcustomer')
        .get(controller.allcustomer);
    router.route('/getAllRecords')
        .get(controller.getAllRecords);
    router.route('/deleteReord')
        .delete(controller.deleteReord);
    router.route('/addReg')
        .post(controller.addReg);
    router.route('/editReg')
        .post(controller.editReg);
        
}