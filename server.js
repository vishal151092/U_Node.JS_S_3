const http = require('http');
const fs = require('fs');
const port = 8080



const routeMap = {
    '/user' : 'user.html',
    '/admin' : 'admin.html',
    '/about' : 'about.html',
    '/' : 'home.html'
}

http.createServer(function (req, res) {

//console.log(req.headers);

    // res.writeHead(200, {
    //     "Content-Type" : "text/html"
    // });

    if(routeMap[req.url]){
        console.log('staticPages/'+routeMap[req.url]);
        fs.readFile('staticPages/'+routeMap[req.url], (error, data)=>{
            if(error){
                res.writeHead(500, {
                    'Content-Type' : 'text/html'
                });
                res.write('<h1>Not able to process file</h1>');
                res.end();    
            }else{
                res.writeHead(200, {
                    'Content-Type' : 'text/html'
                });
                res.write(data);
                res.end(); 
            }


        })
    }
    else{
        res.writeHead(404);
        res.write("Page Not Found");
        res.end();
    }
     

}).listen(port,()=>{
    console.log("Server is UP and running on port: ",port);
}); 






