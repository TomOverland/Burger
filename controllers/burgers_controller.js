var express = require("express");
const burgers = require("../models/burgers");

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burgers.all(function (data) {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burgers.create(
    ["name", "devoured"],
    [req.body.name, req.body.devoured],
    function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;