package main

import (
	"fmt"
	"log"
	"net/http"

	"./pkg/websocket"
)

// Defines websocket endpoint
func serveWS(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.Host)

	// Upgrades connection to websocket conn
	ws, err := websocket.Upgrade(w, r)
	if err != nil {
		log.Println(err)
	}

	go websocket.Writer(ws)
	// Listens for incoming messages on WebSocket
	websocket.Reader(ws)
}

// Routes
func setupRoutes() {

	// WebSocket Route
	http.HandleFunc("/ws", serveWS)
}

func main() {
	fmt.Println("Chat App v1.0")
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}
