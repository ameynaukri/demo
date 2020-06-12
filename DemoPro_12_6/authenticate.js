let config = require('./config');
let user = require('./models/user.model');
let LocalStrategy = require('passport-local').Strategy;
let helperServices = require('./services/helper.service')
let Passport = require('passport');
let request = require('request');

//Serialization
Passport.serializeUser(function(user, done) {
  console.log(user);
  done(null, user.id);
});

Passport.deserializeUser(function(userId, done) {

   new user({id: userId}).fetch().then(function(user) {
      done(null, user.toJSON());
   });
});

//Strategies
Passport.use(new LocalStrategy({usernameField:'username'},function(username, password, done) {
 
   new user({username: username }).fetch().then(function(data) {
      let authInfo = data;
      if(authInfo === null) {
        return done(null, false, {error : true, statusCode : 201});
      } else {
          authInfo = data.toJSON();
          password_plaintext = password
          console.log("The passsword is "+password);
          
          console.log("The original password is :"+authInfo.password);
          console.log("The user type original "+authInfo.user_type);
        if(password_plaintext!= authInfo.password) {
            return done(null, false, {error : true, statusCode : 202});
         } else {


            data = {
              "username": authInfo.username,
              "userType":authInfo.user_type,
              "id": authInfo.id,
              "password": authInfo.password
            }
          /* request("http://apivm.valuemobo.com/SMS/SMS_ApiKey.asmx/SMS_APIKeyNUC?apiKey=25EJ1QKsnIKh3pT&cellNoList=" +authInfo.contact_no+"&msgText=" +authInfo.contact_no+"&senderId=OCEANP", function (error, response, body) {
              if (!error && response.statusCode == 200){
                  console.log(body); 
              }
            })*/
            return done(null, data);
         }
      }
   });
}));

module.exports = Passport;

    