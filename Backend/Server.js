const express = require('express');
const app = express();

app.listen(process.env.PORT, () => {
     console.log("server started...")
})

app.get("/getIssues", (req, res) => {
     Issues = req.body.issues;

})