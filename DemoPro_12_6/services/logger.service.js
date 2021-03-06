
let config = require('../config.js');
let _ = require('lodash');
let graylog2 = require("graylog2");

//Loggers always exist with a local logging mechanism
let loggers = {
  local : {
    verbose : function(msg){
      console.log('[V]:' + msg );
    },
    debug : function(msg){
      console.log('[D]:' + msg );
    },
    info : function(msg){
      console.log('[I]:' + msg );
    },
    warn : function(msg){
      console.log('[W]:' + msg );
    },
    error : function(msg){
      console.log('[E]:' + msg );
    }
  }
};

//Create graylogger if graylog is enabled
if (config.logging.loggers.graylog )
{
  let graylogger = new graylog2.graylog({
    servers: [
      { 'host': config.logging.loggers.graylog.host, port: config.logging.loggers.graylog.port }
    ],
    hostname : config.server.host,
    facility: 'Node.js',     // the facility for these log messages
                             // (optional, default: "Node.js")
    bufferSize: 1350         // max UDP packet size, should never exceed the
                             // MTU of your system (optional, default: 1400)
  });
  graylogger.on('error', function (error) {
    console.error('Error while trying to write to graylog2:', error);
  });

  loggers.graylog = {
    verbose : function(msg){
      //No need for graylog verbosity for now
    },
    debug : function(msg){
      graylogger.debug(msg);
    },
    info : function(msg){
      graylogger.info(msg);
    },
    warn : function(msg){
      graylogger.warning(msg);
    },
    error : function(msg){
      graylogger.error(msg);
    }
  }
}

let doLog = function(type, scriptName,message){
  let msg = scriptName;
  if (message != undefined )
    msg = msg + ' : ' + message;
  _.forEach(config.logging.loggers, function(logger) {
    loggers[logger.type][type](msg);
  });
};

let isVerbose = function(){
  return config.logging.level == 'verbose'
};
let isDebug = function(){
  return isVerbose() || config.logging.level == 'debug';
};
let isInfo = function(){
  return isDebug() || config.logging.level == 'info';
};
let isWarn = function(){
  return isInfo() || config.logging.level == 'warn';
};
let isError = function(){
  return isWarn() || config.logging.level == 'error';
};

exports.verbose= function(scriptName,message) {
  if (isVerbose())
    doLog('debug',scriptName,message);
};
exports.debug= function(scriptName,message) {
  if (isDebug())
    doLog('debug',scriptName,message);
};
exports.info= function(scriptName,message) {
  if (isInfo())
    doLog('info',scriptName,message);
};
exports.warn= function(scriptName,message) {
  if (isWarn())
    doLog('warn',scriptName,message);
};
exports.error= function(scriptName,message) {
  if (isError())
    doLog('error',scriptName,message);
};
