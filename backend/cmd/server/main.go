package main

import (
	"Katong/api/routes"
	"fmt"
	"net/http"
)

func main() {
	r := routes.SetupRoutes()

	// Start server
	http.ListenAndServe(":3333", r)
	fmt.Println("Server started on port 3333")
}
