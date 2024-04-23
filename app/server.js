const http = require('http')
const fs = require('fs')
const path = require('path')

const port = 3000
http.createServer((req,res) =>{
    //serve the task.html file
    const filePath = path.join(__dirname, 'task.html');
    fs.readFile(filePath, async(err, data) =>{
        if(err){
            res.writeHead(500);
            await console.log(err)
            res.end('Error loading html file');
            return;
        }
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.end(data);
    });

}).listen(port, () =>{
    console.log(`Server running at http://localhost:${port}/`);
});