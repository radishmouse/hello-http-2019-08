const nerds = require('nerds')
const http = require("http");

function createName() {
    let pokeName = nerds.resolve('Pokemon', 1).include(['name']).asArray()[0].name
    let swName = nerds.resolve('Star Wars', 1).include(['name']).asArray()[0].name
    let splitSW = swName.split(' ')
    if (splitSW.length > 1) {
        return `${pokeName} ${splitSW.pop()}`
    }
    else { return `${pokeName} ${splitSW[0]}`}
}

const server = http.createServer((req, res) => {
    res.end(`<h1>Your PokeWars name is ${createName()}<h1>`)
})

server.listen(3000)