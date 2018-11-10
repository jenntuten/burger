let express = require("express");

let PORT = process.env.PORT || 8181;

let app = express();

//Serves static files such as images, CSS files, and JS files.
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set up Handlebars.
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes.
let routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
