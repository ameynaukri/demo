let config = require('../config'),
    User = require('../models/user.model'),
    fs = require("fs"),
    bPromise = require("bluebird"),
    authusers = require('../services/authusers.service'),
    Passport = require('passport');
orm = require('../orm');
let multer  = require('multer');

exports.authorizseUser = function(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.status(401).send({
            "error": true,
            "status": "error",
            "message": "User is not authorized",
            "result": "User is not authorized"
        });
    }

    next();
}
//login
exports.login = function(req, res, next) {
    console.log("login");
    let password = (req.body.password) ? req.body.password : false;
    let username = (req.body.username) ? req.body.username : false;
    console.log("Password :" + password);
    console.log("User name /Email :" + username);

    if (password)
        req.body.password = password;
    if (!req.body.password || !username) {
        return res.json({
            "StatusCode": 304,
            "result": "Please send required parameter.",
            "ResponseMessage": "Please send required parameter."
        });
    } else {
        return Passport.authenticate('local',
            function(err, user, info) {
                if (err) {
                    return errors.returnError(err, res);
                }
                if (!user) {
                    if (info.error == true && info.statusCode == 201) {
                        return res.json({
                            "StatusCode": 404,
                            "result": null,
                            "ResponseMessage": "User doesn't exist."
                        });
                    } else if (info.error == true && info.statusCode == 202) {
                        return res.json({
                            "StatusCode": 401,
                            "result": [],
                            "ResponseMessage": "Invalid Password."
                        });

                    }
                } else {
                    return req.logIn(user, function(err) {
                        return res.json({
                                "StatusCode": 200,
                                "result": user,
                                "ResponseMessage": "This is a valid user"
                            });
                       
                    });
                }
            }
        )(req, res, next);
    }
};


exports.allcustomer =function(req,res){
    let AllUsers = User.forge().query(function(qb) {
        qb.select("*")
    }).fetchAll().then(function(addy) {
        return addy;
    });/*.then(function(addy) {
        
    });*/

    AllUsers.then(function(AllUsers) {
        if (AllUsers.length == 0) {
            let AllUsers = [];
            res.json({
                "error": true,
                status: "error",
                "ResponseMessage": "No Records Found",
                result: AllUsers
            });
        } else {
            res.json({
                "error": false,
                status: "success",
                "ResponseMessage": "",
                result: AllUsers
            });
        }
    }).catch(function(err) {
        return errors.returnError(err, res);
    });
}

exports.deleteReord = function(req, res) {
    let id = (req.query.id) ? req.query.id : false;
    return authusers.deleteReord(id).then(function(formate) {
        return formate;
    }).then(function(formate) {
        return formate;
    }).catch(function(err) {
        return errors.returnError(err, res);
    }).then(function(data) {
        res.json({
            "error": false,
            "Status": "Success",
            "ResponseMessage": "Record Deleted Successfully.",
            "result": data
        });
    }).catch(function(err) {
        return errors.returnError(err, res);
    });
}


exports.getAllRecords =function(req,res){
    let id = (req.query.id) ? req.query.id : false;
    let AllUsers = User.forge().query(function(qb) {
        qb.select("*")
        qb.where({
            "id": id
        });
    }).fetchAll().then(function(addy) {
        return addy;
    });/*.then(function(addy) {
        
    });*/

    AllUsers.then(function(AllUsers) {
        if (AllUsers.length == 0) {
            let AllUsers = [];
            res.json({
                "error": true,
                status: "error",
                "ResponseMessage": "No Records Found",
                result: AllUsers
            });
        } else {
            res.json({
                "error": false,
                status: "success",
                "ResponseMessage": "",
                result: AllUsers
            });
        }
    }).catch(function(err) {
        return errors.returnError(err, res);
    });
}


exports.editReg = function(req, res) {
    return authusers.editReg(req.body).then(function(regDetail) {
        if (regDetail) {
            res.json({
                "StatusCode": 200,
                "regDetail": regDetail,
                "ResponseMessage": "Registration done successfully !!!"
            });
        } else {
            res.json({
                "StatusCode": 301,
                "regDetail": regDetail,
                "ResponseMessage": "An error has occurred."
            });
        }
    });
}

exports.addReg = function(req, res) {
    console.log(req.body);    
    console.log(req.body.file);    
    return authusers.addReg(req.body).then(function(regDetail) {
        if (regDetail) {
            res.json({
                "StatusCode": 200,
                "regDetail": regDetail,
                "ResponseMessage": "Registration done successfully !!!"
            });
        } else {
            res.json({
                "StatusCode": 301,
                "regDetail": regDetail,
                "ResponseMessage": "An error has occurred."
            });
        }
    });
}

