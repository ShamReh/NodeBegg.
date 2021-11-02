const tutorial = require('./tutorial');

console.log("Hello World from Node"); //global

console.log(tutorial.sum(1,1));
console.log(tutorial.PI);

function sayHello(name){
    console.log('Hello '+ name);
}

sayHello('Sham');

// setTimeout()
// clearTimeout()
// setInterval()
// clearInterval() GLOBAL

// console.log(module);

// const log = require('./logger');

// console.log(log);

// log('message');

const path = require('path');

let pathObj= path.parse(__filename);

console.log(pathObj);

const os = require('os');

let totalMemory = os.totalmem();
let freeMemory= os.freemem();

console.log(`Total Memory:  ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

const fs = require('fs');

// const files= fs.readdirSync('./');
// console.log(files);

fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
});

const EventEmitter = require('events');

// //Raised event
// emitter.emit('messageLogged', {id: 1, url: 'http://'});

//Raise: logging(data: message)
const Logger = require('./logger');
const logger = new Logger();

//Register listener
logger.on('messageLogged', (arg) => {
    console.log('Listener Called!', arg);
});

logger.log('message');

const http= require('http');
const { SSL_OP_LEGACY_SERVER_CONNECT } = require('constants');

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');