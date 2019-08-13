//without "./", node looks in it's global module folder

const http = require("http");
const nerds = require('nerds');
const single = nerds.resolve('Harry Potter').asArray()[0].full;
console.log(single);
const single2 = nerds.resolve('Harry Potter').asArray()[0].full;
console.log(single2)
const single3 = nerds.resolve('Harry Potter').asArray()[0].full;
const single4 = nerds.resolve('Harry Potter').asArray()[0].full;


function handleReqAndResp(req, res) {
    console.log(req.url);
    res.end(`<h1>My name is ${single}, and I hate ${single2}, love ${single3}, and am going to kill ${single4}.</h1>`); //.end() sends the response.
    console.log("received a request");                                    // it "tapes up the box and ships it"
};


//create a variable that represents our server, what's a server?
// a server is a piece of code or a computer
// running a piece of code that does something useful for you
// usually servers store data and often manipulate
//that data
//http.createServer() accepts a function, and returns a "server"
//when the server receives a Request:
// 1. It puts together *most of a response
// 2. It calls your function and passes it the request and response


const server = http.createServer(handleReqAndResp);
//createServer() creates a server
//what is 3000? or 9000, it's a pobox
server.listen(7002);

