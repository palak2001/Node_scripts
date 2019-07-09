const http= require("http");

function rqserver(req,res)
{
    console.log(res);
    res.setHeader('Content-Type','text/html');
   res.write('<html><body><h1>Oh yeah!</h1></body></html>');
    res.end();
}

server= http.createServer(rqserver);

server.listen(3000);