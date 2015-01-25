/*
 * streaming_temp.js
 * 2015, Masuda Michiori
 *   
 * Reading temperature sensor(LM35DM) on Arduino by johnny-five over Firmata
 * and push it to all the clients(browser) with on/off control.
 * Please make sure that this server continues to read temperature 
 * even in case of not sending data to clients. 
 */

//　required modules
var express = require('express');
var http = require('http');
var io = require('socket.io');
var five = require("johnny-five");

// start Arduino locally connected by USB to prepare for reading temperature
// please make sure that Firmata should be downloaded in advance.
five.Board().on("ready", function () {
    temperature = new five.Temperature({// global variable
        controller: "LM35",
        pin: "A0",
        freq: 1000 // reading every 1000 msec
    });
});

// start http server on port 8080 to wait for browser access.
var app = express();
app.use(express.static(__dirname + '/public')); //read from index.html on /pubilc 
var server = http.createServer(app).listen(8080);
var io = io.listen(server); // listen on port 8080
displayreq = false; // global variable,save display status

// socket.io coomunication
io.sockets.on('connection', function (socket) {
    console.log("connected");
    // start reading temperature while socket connected
    temperature.on("data", function (err, data) {
        console.log(data.celsius); // output temperature
        // while displayreq is true, time and temp are sent to clients every freq
        if (displayreq === true) {
            var x = new Date().getTime();
            console.log(x); // output elapsed time
            var message = JSON.stringify({time: x, temperature: data.celsius});
            socket.emit('msg', message); //for all the clients
            socket.broadcast.emit('msg', message); //for all the clients
            console.log("pushed data");
        }
    });
    socket.on('on', function () {
        displayreq = true; // on recieving 'on' message, start sending data
        console.log("display request=" + displayreq);
    });
    socket.on('off', function () {
        displayreq = false;// on recieving 'off' message, stop sending data
        console.log("display request=" + displayreq);
    });
});




