const EventEmitter = require('events');


console.log(__filename);
console.log(__dirname);

let url = 'http://mylogger.io/log';

class Logger extends EventEmitter {

    log(message){

        //send HTTP request
        console.log(message);
        
        //Raised event
        this.emit('messageLogged', {id: 1, url: 'http://'});
        
        }
    
}



module.exports = Logger;
