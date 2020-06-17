var Forums = require('../models/Forums.model'),
    user = require('../models/user.model'),
    bPromise = require("bluebird");

exports.getAllForums = function(req, res) {
    var category = (req.query.task_type) ? req.query.task_type : false;
    var area = user.forge().query(function(qb) {
        qb.select('user.first_name', 'tbl_forum.title', 'tbl_forum.id');
        qb.rightJoin('tbl_forum', function() {
            this.on('tbl_forum.id', '=', 'user.id')
        })
        qb.count('tbl_forum.id as  no_of_comments');
        qb.orderBy('forum_id', 'desc')
        qb.where('tbl_forum.category', '=', category);
        qb.groupBy("tbl_forum.id");
    }).fetchAll().then(function(addy) {
        return addy;
    }).then(function(addy) {
        return bPromise.map(addy.models, function(addy) {
            return {
                first_name: addy.get("first_name"),
                customer_id: addy.get("id"),
                title: addy.get("title"),
                no_of_comments: addy.get("no_of_comments"),
                time: "10:30",
            }
        })
    });
    area.then(function(area) {
            if (area.length == 0) {
                var area = [];
                res.json({
                    "error": false,
                    status: "success but records are not present",
                    "message": "",
                    result: area
                });
            } else {
                res.json({
                    "error": false,
                    status: "success",
                    "message": "",
                    result: area
                });
            }
        })
        .catch(function(err) {
            return errors.returnError(err, res);
        });
};

exports.getForumsDetail = function(req, res) {
    var customer_id = (req.query.customer_id) ? req.query.customer_id : false;
    var category = (req.query.task_type) ? req.query.task_type : false;
    var area = Forums.forge().query(function(qb) {
        qb.select('*');
        qb.where('id', '=', customer_id);
        qb.andWhere({
            'category': category
        })
        qb.orderBy('forum_id', 'desc')
    }).fetchAll().then(function(addy) {
        return addy;
    }).then(function(addy) {
        return bPromise.map(addy.models, function(addy) {
            return {
                first_name: addy.get("first_name"),
                customer_id: addy.get("id"),
                title: addy.get("title"),
                story: addy.get("story"),
                time: "10:30",
            }
        })
    });
    area.then(function(area) {
        if (area.length == 0) {
            var area = [];
            res.json({
                "error": false,
                status: "success but records are not present",
                "message": "",
                result: area
            });
        } else {
            res.json({
                "error": false,
                status: "success",
                "message": "",
                result: area
            });
        }
    })
    .catch(function(err) {
        return errors.returnError(err, res);
    });
};