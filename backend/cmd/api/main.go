package main

import (
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	// Create a new router
	r := chi.NewRouter()

	// Use the logger and recoverer middleware
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	// Define a route
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("root."))
	})

	// Start the server
	http.ListenAndServe(":3333", r)

	// print the following message to the console
	fmt.Println("Server is running on port 3333")

}
