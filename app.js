import Hapi from "@hapi/hapi";

import descriptionRouter from "./mvc/routes/descriptionRouter.js";

const server = Hapi.server({
  port: process.env.PORT || 3000,
  host: process.env.HOST || "localhost",
  routes: {
    cors: {
      origin: ["*"],
    },
  },
  //   query: {
  //     parser: (query) => Qs.parse(query),
  //   },
});

server.route(descriptionRouter);

const init = async () => {
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
