// const http = require("http")

// const server = http.createServer((req, res)=>{
//     // res.end("<h1>hello</h1>")
//     // console.log({req: req.url})
//     switch (req.url) {
//         case "/":
//             res.end("<h1>hello</h1>")
//             break;

//         case "/frensh":
//             res.end("<h1>Bonjour</h1>")
//             break;

//         case "/spanish":
//             res.end("<h1>Ola</h1>")
//             break;
    
//         default:
//             res.end("<h1>Oups error</h1>");
//     }
// })

// server.listen(5000, ()=>{
//     console.log("The server is running on port 5000")
// })

// const _ = require('lodash')
// console.log(_.compact([true, 10, 0, NaN, false, "", 2555]))

console.log(__dirname, __filename)
