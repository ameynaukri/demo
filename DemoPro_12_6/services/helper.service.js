let crypto = require('crypto'),
    config = require('../config'),
    moment = require('moment');
    exports.decrypt = function(text,Email){
      let decipher = crypto.createDecipher('aes-256-cbc',Email);
      let dec = decipher.update(text,'base64','utf8');
      dec += decipher.final('utf8');
      return dec;
    }
    exports.encryption = function(text,Email){
      let cipher = crypto.createCipher('aes-256-cbc',Email);
      let crypted = cipher.update(text,'utf8','base64');
      crypted += cipher.final('base64');
      data = crypted;
      return data;
    }
/*exports.getDisplayTime = function(PostTime){
  let now = moment().format('YYYY-MM-DD HH:mm:ss') ;
  
  let now = moment(new Date()); //todays date
  let end = moment(PostTime); // another date
  let duration = moment.duration(now.diff(end));
  let days = duration.asDays();
  let Hours = duration.asHours();
  let Minutes = duration.asMinutes();
  let Seconds = duration.asSeconds();
  if(Math.round(days)>365){
      let years = (days / 365);
      if (days % 365 != 0)
          years += 1;
      if(years==1)
          let displayTime = Math.round( years ) + " year";
      else
          let displayTime = Math.round( years ) + " years";

      return displayTime;
  }
  if (Math.round(days) > 30){
                  let months = (days / 30);
                  if (days % 31 != 0)
                      months += 1;
                 if(months==1)
                      let displayTime = Math.round( months ) + " month";
                  else
                      let displayTime = Math.round( months ) + " months";
                  return displayTime;
  }
  if (Math.round(days) > 0){
      if(days==1)
          let displayTime = Math.round( days ) + " day";
      else
          let displayTime = Math.round( days ) + " days";
      return displayTime;
  }
   if(Math.round(Hours) > 0){
      if(Hours==1)
          let displayTime = Math.round( Hours ) + " Hour";
      else
          let displayTime = Math.round( Hours ) + " Hours";
      return displayTime;
   }              
  if(Math.round(Minutes) > 0){
    if(Minutes==1)
        let displayTime = Math.round( Minutes ) + " Minute";
    else
        let displayTime = Math.round( Minutes ) + " Minutes";
    return displayTime;
  }         
  if(Math.round(Seconds) > 5){
    if(Seconds==1)
        let displayTime = Math.round( Seconds ) + " Second";
    else
        let displayTime = Math.round( Seconds ) + " Seconds";
    return displayTime;
  }  
  if( Math.round(Seconds)<= 5){
        let displayTime = "just now";
        return displayTime;
  }
}*/

/*exports.base64toimage = function(dataString,section,resolve, reject){
   console.log("dataString");
    let min = 100000; 
    let max = 999999; 
    let name = Math.floor(Math.random() * (max - min + 1)) + min+".png";
    
    let folder = "Avatar";
    let filename=config.image_path+"Upload/"+folder+"/"+name;
    let path = "Upload/"+folder+"/"+name;
    fs.writeFile(filename, new Buffer(dataString, "base64"),function(err){
      if(err){
        console.log("err");
        console.log(err);
        console.log("err");
      } 
      else
      console.log("file uploaded successfully");
        resolve(path);
       // return path;
    });
};*/