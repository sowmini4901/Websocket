import express from "express";
import {WebSocketServer} from "ws";

const app = express();
const port = 8080;

const server = app.listen(port, ()=>{
    console.log("server is listening ....");
});
//using server instance of http port to make sure that websocket server and http server wants to run in same port
const wss = new WebSocketServer({server});

wss.on("connection", (ws)=>{
    ws.on("message", (data)=>{
        console.log("received data is %s" , data);
        ws.send("Hello buddy!!!");
    })
})

