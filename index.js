const express = require("express");
const app = express();
const fetch = require('node-fetch');

app.get("/", (req,res) => {
    res.send("Home page");
})

app.get("/:org", (req,res) => {

    var orgName = req.params.org;       // Requested name of organisation

    let url = "https://api.github.com/orgs/" + orgName + "/repos";

    fetch(url)
        .then(res => res.json())
        .then((repos) => {
            
            var names = [repos[0].name];
            for(var i=1; i<repos.length; i++){
                names.push(repos[i].name);
            }

            res.send(names); 
        });
})

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`listening to port ${port}`);
})