const express = require("express");
const cors = require('cors');

const hubsRouter = require("../routes/post-route");

const commentRouter = require("../routes/comments-route");

const server = express();

server.use(express.json());
server.use(cors());

//GETS

server.get("/", (req, res) => {
  res.send(`
    <h2> Rossi Web Dev Blog</h2>
    <h2> Creating an API!</h2>
  `);
});



//POSTS

server.use('/api/posts', hubsRouter, commentRouter);





// server.use("/api/posts", hubsRouter, commentRouter);

// server.use('/api/posts/:id/comments', )

module.exports = server;
