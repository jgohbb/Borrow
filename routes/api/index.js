const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");
const passport = require("passport");

//auth login
router.get("/auth/login", (req, res) => {
  res.render("login", { user: req.user });
});

// auth logout and remove the cookie in the browser
router.get("auth/logout", (req, res) => {
  //handle with passport
  // res.send("logging out");
  req.logout();
  res.redirect("/");
});

// auth with google
router.route("/auth/google").get(
  passport.authenticate("google", {
    scope: ["profile"]
  })
);

// callback route for goole to redirect to
router.get(
  "auth/google/redirect",
  passport.authenticate("google"),
  (req, res) => {
    // res.send(req.user);
    res.redirect("/profile/");
  }
);
router.route("/api/inventory/inventory")
  .get(itemsController.findAll)
  .post(itemsController.addItem);

router.route("/api/inventory/search").post(itemsController.homeSearch);
router.route("/api/inventory/:id").get(itemsController.inventorySearch);




module.exports = router;
