const http=require('http');
// const sum = require('./Sum')
const host = 'localhost'
const port = 3000

// let x = Number(process.argv[2])
// let y = Number(process.argv[3])

const requestListen = function (req, res) {
    // res.end(req.headers.host)
    // console.log(res)
    res.end('Hello World!');
    // res.end(`The answer is : ${sum.x + sum.y}`)
}
const server = http.createServer(requestListen)

server.listen(port, () => {
    console.log(`Server running at http://${host}:${port}`)
})