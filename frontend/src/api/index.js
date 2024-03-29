var socket = new WebSocket("ws://localhost:8080/ws");

let connect = cb => {
    console.log("Connecting...");

    socket.onopen = () => {
        console.log("Successfully Connected!");
    }

    socket.onmessage = msg => {
        console.log(msg);
        cb(msg);
    }

    socket.onclose = event => {
        console.log("Socket Closed Connection: ", event);
    }

    socket.onerror = err => {
        console.log("Socket Error: ", err);
    }
};

let sendMsg = msg => {
    console.log("Sending message: ", msg);
    socket.send(msg);
}

export{connect, sendMsg}