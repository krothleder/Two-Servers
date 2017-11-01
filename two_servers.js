var http = require("http");

var PORT_1 = 7000;

var PORT_2 = 7500;

function handleRequest1(request, response) {
    response.end("It Works!!!! Path hit: " + request.url);
}


function handleRequest1(request, response) {
    response.end("It Works!!!! Path hit: " + request.url);
}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:%s", PORT);
});

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:%s", PORT);
});