
const exampleSocket = new WebSocket(
     "ws://localhost:8080",
     "protocolOne"
);
console.log(exampleSocket.readyState);

exampleSocket.onopen = (event) =>{
    exampleSocket.send("Hi server, this is from client side custom");
}
