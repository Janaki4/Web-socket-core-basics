const http = require("http")
const ws = require("ws")
const server = http.createServer()


const wss = new ws.WebSocketServer({ server })

wss.on("connection", (websocket, data) => {
    websocket.on("message", (data) => {
        console.log(data.toString() , new Date().toUTCString())
    })
    websocket.send("hii....")
    // setInterval(() => { 
    //     websocket.send("hi ....")
    // },1000)
    
})

server.listen(8000, () => {
    console.log("connected")
})