const express = require("express");
const app = express();
const path = require("path");
const adminData = require("./routes/admin");
const shopRouter = require("./routes/shop");
const expressHbs = require('express-handlebars');


app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not found'});
});

app.listen(3000);