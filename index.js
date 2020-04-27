const Koa = require("koa");
const app = new Koa();

app.use(function *() {
  this.body = "koa says this has changed";
})

const port = process.env.port || (process.argv[2] || 3000);

if (!module.parent) {
  app.listen(port);
}
console.log("App started on port: " + port);