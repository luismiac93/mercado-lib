const express = require("express");
const http = require("http");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 4001;

    //http server
    this.server = http.createServer(this.app);
  }

  middlewares() {
    //cors
    this.app.use(cors());
    //parseo del body
    this.app.use(express.json());

    this.app.use("/api/items", require("../routes/items"));
  }

  execute() {
    //call the middlewares
    this.middlewares();

    this.server.listen(this.port, () =>
      console.log(`Listening on port ${this.port}`)
    );
  }
}

module.exports = Server;
