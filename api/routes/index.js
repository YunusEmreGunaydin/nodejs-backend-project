var express = require('express');
var router = express.Router();

const fs = require("fs"); // Dosya okuma işlemlerini yapar.

let routes = fs.readdirSync(__dirname); // redirect vereceğim bunu senkron bir şekilde oku demiş oluyoruz // dirname de bulunduğu dosya yapısının adını alıyor.

for(let route of routes){
  if(route.includes(".js") && route != "index.js" ){
    router.use("/"+route.replace(".js",""),require('./'+route));
  }
}

module.exports = router;
