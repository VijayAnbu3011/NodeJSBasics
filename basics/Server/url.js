let http = require("http");
let url = require("url");
let port = 7000;

http
  .createServer((request, response) => {
    // parsing the Url by Url module to separate path and
    // to convert query string as an object
    let reqUrl = url.parse(request.url, true);
    console.log("reqUrl", reqUrl);
    console.log("query String", reqUrl.query);
    response.write(JSON.stringify(reqUrl.query));
    response.write(JSON.stringify(reqUrl.path));
    response.end("\n Hello Everyone");
  })
  .listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
