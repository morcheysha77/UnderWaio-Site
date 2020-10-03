server.get("/login", (request, response) => {
    response.render(
        "pages/login",
    );
});