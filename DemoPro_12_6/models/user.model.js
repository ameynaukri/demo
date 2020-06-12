let orm = require('../orm');

// Related Models

let user = orm.bookshelf.Model.extend({
	  tableName: 'user',
	  idAttribute: 'id'
});
module.exports = user;