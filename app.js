var express = require('express');
var path = require('path');
var app = express();
var router = express.Router();

app.set('view engine', 'pug', function() {
    console.log("View engine is pug");
});

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.render("/views/index.pug");
});

app.use("/",router);

// app.use("*",function(req,res){
//   res.sendFile(path + "404.html");
// });

app.listen(process.env.PORT || 3000,function(){
  console.log("Live at Port 3000");
});

