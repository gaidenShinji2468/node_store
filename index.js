// configurar express
const express = require("express");
const app = express();

// configurar puerto
const port = 5000;

// asociar un proceso a un endpoint, mediante un metodo http
app.get("/", (req, res) => {
    res.send("Hello this is my server");
});

// hacer escuchar el servidor a un puerto
app.listen(port, () => {
    console.log(`Server runs on port ${port}`);
});
