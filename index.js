const http = require('http');
const comparecsv = require('./comparecsv.js');
const csvNames = ['1.csv','2.csv'];

const server = http.createServer(function(request, response) {
    var discrepancyDivs = "";
    var finalResponse = comparecsv.compare(csvNames);
    if(typeof finalResponse === "string"){
        discrepancyDivs = finalResponse;
    }
    else{
        for(var i=0; i<finalResponse.length; i++){
            discrepancyDivs += '<div>'+finalResponse[i]+'</div>';
        }
    }

    var html = `
            <html>
                <body>
                `+discrepancyDivs+`
                </body>
            </html>`
    response.writeHead(200, {'Content-Type': 'html'})
    response.end(html)
  
})

const port = 3001
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)