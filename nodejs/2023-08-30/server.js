// 라우팅 연습
const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200);
      res.end("main url");
    } else if (req.url === "/upload") {
      res.writeHead(200);
      res.end("upload url");
    } else if (req.url === "/delete") {
      res.writeHead(200);
      res.end("delete url");
    } else {
      res.writeHead(404);
      res.end("Not Found!");
    }
  })
  .listen(3000, () => {
    console.log("3000번 포트 접속 완료!");
  });
