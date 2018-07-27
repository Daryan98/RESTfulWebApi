const routes = (app) => {
    app.route("/contact")
    .get((req, res) => 
        res.send("GET request Successfull!!!!!"))
    
    .post((req, res) => 
        res.send("POST request Successfull!!!!!"));
    
    app.route("/contact/:contactId")
    .put((req, res) => 
        res.send("PUT request Successfull!!!!!"))
    
    .delete((req, res) => 
        res.send("DELETE request Successfull!!!!!"));
    
}

export default routes;