const formidable = require('formidable')
const http = require('http')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('<form action="fileUpload" method="POST" enctype="multipart/form-data">')
    res.write('<input type="file" name="fileToUpload"><br>')
    res.write('<input type="submit">')
    res.write('</form>')
    res.end()
}).listen(8080)