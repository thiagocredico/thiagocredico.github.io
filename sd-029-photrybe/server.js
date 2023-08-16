const http = require("http");

const host = 'localhost';
const port = 8000;

const users = [
  {
    id: 1,
    name: "Arthur",
    email: "admin@betrybe.com",
    password: "123456",
    isAdmin: true,
  },
  {
    id: 2,
    name: "João",
    email: "user@betrybe.com",
    password: "123456",
    isAdmin: false,
  }
];

const requestListener = function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }
  req.on("data", (chunk) => {
    const data = JSON.parse(chunk);
    if (!data) {
      res.setHeader("Content-Type", "application/json");
      res.writeHead(400);
      res.end(JSON.stringify({ message: "Bad request" }, null, 3));
      return;
    }
    const { email, password } = data;
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(JSON.stringify(user, null, 3));
      return;
    }
    res.setHeader("Content-Type", "application/json");
    res.writeHead(401);
    res.end(JSON.stringify({ message: "Email or password is incorrect" }, null, 3));
  });
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});