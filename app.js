const express = require("express");
const app = express();

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});

app.get("/status", (req, res) => {
    res.send("The server is alive!");
});
