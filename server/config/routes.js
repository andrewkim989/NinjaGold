var golds = require("../controllers/golds.js");

module.exports = function(app) {
    app.get("/gold", function(req, res) {
        golds.all(req, res);
    });

    app.post("/start", function(req, res) {
        golds.start(req, res);
    });

    app.put("/gold", function(req, res) {
        golds.find(req, res);
    });
}