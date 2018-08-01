const app = require("express")();

app.get("/", (req, res) => res.json({ message: "o hai" }));

app.listen(process.env.PORT || 3000, () => console.log("server live"));
