// require("dotenv").config();
const app = require("./server/server");

const port = 5005;

app.listen(port, () => {
  console.log('\x1b[36m%s\x1b[5m' , ` *** Server Running on http://localhost:${port} ***`);
});