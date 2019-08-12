const nerds = require(`nerds`);
const http = require(`http`);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
const server = http.createServer((req, res) => {
    res.end(`Your new Pokemon name is ${createName()}`)
});

function createName() {
    const pokeName = nerds.resolve('Pokemon', 1).include(['name']).asArray()[0].name;
    const starName = nerds.resolve('Star Wars', 1).include(['name']).asArray()[0].name;
    const starNameSplit = starName.split(' ');
    if (starNameSplit.length > 1) {
        return `${pokeName} ${starNameSplit.pop()}`;
    } else {
        return `${pokeName} ${starNameSplit[0]}`
    }
}
console.log(createName());




server.listen(3000);