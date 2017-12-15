var config = require('../config'),
    User = require('../models/user.model'),
    fs = require("fs"),
    bPromise = require("bluebird"),
    authusers = require('../services/authusers.service'),
    Passport = require('passport');
orm = require('../orm');
var multer  = require('multer');
/*var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname+ '-' + Date.now()+'.jpg')
    }
});
var upload = multer({ storage: storage });*/

/*var config = require('../config'),
    User = require('../models/user.model'),
    authusers = require('../services/authusers.service'),
    moment = require('moment'),
    moment_tz = require('moment-timezone'),
    fs = require("fs"),
    bPromise = require("bluebird"),
    Passport = require('passport');
orm = require('../orm');
var DateDiff = require('date-diff');
var crypto = require('crypto');
var request = require('request');
var excelbuilder = require('msexcel-builder');*/
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

    var password = (req.body.password) ? req.body.password : false;
    var username = (req.body.username) ? req.body.username : false;
    //id = (req.body.id)?req.body.id:false;



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
    var AllUsers = User.forge().query(function(qb) {
        qb.select("*")
    }).fetchAll().then(function(addy) {
        return addy;
    });/*.then(function(addy) {
        
    });*/

    AllUsers.then(function(AllUsers) {
        if (AllUsers.length == 0) {
            var AllUsers = [];
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
    console.log("controller delete parking");
    var id = (req.query.id) ? req.query.id : false;
    //var id = (id) ? req.query.id : false;
    console.log("==========================================="+id);
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
    var id = (req.query.id) ? req.query.id : false;
    var AllUsers = User.forge().query(function(qb) {
        qb.select("*")
        qb.where({
            "status": id
        });
    }).fetchAll().then(function(addy) {
        return addy;
    });/*.then(function(addy) {
        
    });*/

    AllUsers.then(function(AllUsers) {
        if (AllUsers.length == 0) {
            var AllUsers = [];
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
    console.log("-----------------------------------------");
    console.log(req.body);    
    console.log("-----------------------------------------");
    return authusers.editReg2(req.body).then(function(regDetail) {
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


exports.add = function(req, res) {
    console.log("req.body");    
    console.log("req.body "+req.body.name);    
    //console.log("file "+req.body.file);    
    //console.log("file name"+req.body.file.name);    
}

//file.name

var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './uploads/');
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);

            console.log("--------------------------------------------------------");
            var image_name = file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1];
            //console.log("image_name Amey "+image_name);
            console.log("=========================================================");
        }
    });

var upload = multer({ //multer settings
    storage: storage
}).single('file');

exports.add = function(req, res) {

   
    upload(req,res,function(err){

        if(err){
             res.json({error_code:1,err_desc:err});
             return;
        }
        console.log("-----aaaaa--------------------------------");
        console.log(req.body);
        console.log("name"+req.body.name);
        console.log("filename"+req.file.filename );
        //console.log("image_name image_name"+image_name);
        if(req.body.cricket == "true"){
            console.log("working with true");
        }else{
            console.log("working with false");
        }
        console.log("======aaaaa===============================");
        //res.json({error_code:0,err_desc:null});
         res.json({
            "StatusCode": 200,
            //"regDetail": regDetail,
            "ResponseMessage": "Registration done successfully !!!"
        });
        // console.log("---------csdggdgd--------------gdfhfhfhf---------")
    });
}



exports.addReg = function(req, res) {
    console.log(req.body);    
    console.log(req.body.file);    
    return authusers.addReg2(req.body).then(function(regDetail) {
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

