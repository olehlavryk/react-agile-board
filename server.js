const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./database/routes.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});

const PORT = process.env.PORT || 8000;
server.use(middlewares);
server.use(jsonServer.rewriter({ "./src/api/*": "/$1" }));
server.use(router);
server.listen(PORT, () => {
  console.log("Server is runnirng!");
});
