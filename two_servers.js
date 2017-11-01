var http = require("http");

var PORT_1 = 7000;

var PORT_2 = 7500;

function handleRequest1(request, response) {
    response.end("You are Awesome!" );
}


function handleRequest2(request, response) {
    response.end("You suck!");
}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(PORT_1, function() {
    console.log("Server listening on: http://localhost:%s", PORT_1);
});

server2.listen(PORT_2, function() {
    console.log("Server listening on: http://localhost:%s", PORT_2);
});