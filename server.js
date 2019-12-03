//dependencies
let express = require("express");
let path = require("path");
//express
let app = express();
let PORT = process.env.PORT || 3001;

//Configure Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('build'));
//Static Assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

//Routes
const routes = require("./routes");
app.use(routes);

//Start the Express Server
app.listen(PORT, function(){
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});