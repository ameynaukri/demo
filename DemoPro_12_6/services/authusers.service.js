let Contact = require('../models/user.model'),
    moment = require('moment'),
    promise = require('bluebird'),
    helperServices = require('../services/helper.service'),
    errorTypes = require('../errortypes');
//let crypto = require("crypto");


exports.addReg = function(params) {
    console.log("addReg");
    let username = (params.username) ? params.username : false;
    let password  = (params.password ) ? params.password  : false;
    let user_type  = (params.user_type ) ? params.user_type  : false;
    let status  = (params.status ) ? params.status  : false;
    let Contactdata = new Contact({
        "username": username,
        "password":  password ,
        "user_type":  user_type ,
        "status":  status ,
    });

    return Contactdata.save(null).tap(function(model) {
        Contactdata = model;
        return Contactdata;
    }).then(function(Contactdata) {
        return Contactdata;
    }).catch(function(err) {
        return err;
    });

}

exports.editReg = function(params) {
    let username = (params.username) ? params.username : false;
    let password  = (params.password ) ? params.password  : false;
    let id = (params.id) ? params.id : false;
    params = {
        "username": username,
        "password": password,
    }
    let updateParams = {
        patch: true
    }
    let data = params;
    return Contact.forge().query(function(qb) {
        qb.where('id', id);
    }).fetch().then(function(products) {
        //products.forEach(function(products) {
        return products.save(data, updateParams);
        //});
    }).catch(function(err) {
        console.log(err);
        return err;
    });

}






exports.deleteReord = function(id){
    console.log("service delete parking = " + id);
    return Contact.forge().query(function(qp){
        qp.where('id', id);
    }).fetch().then(function(model){
        model.destroy().then(function(data){
            console.log("deleted");
        });
    });
}