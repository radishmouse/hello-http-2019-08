const nerds = require(`nerds`);
const http = require(`http`);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
const server = http.createServer((req, res) => {
    res.end(`${createName()}`)
});

function createName() {
    const harryName = nerds.resolve('Harry Potter').asArray()[0];
    const pokeName = nerds.resolve('Pokemon', 1).include(['name']).asArray()[0].name;
    const starName = nerds.resolve('Star Wars', 1).include(['name']).asArray()[0].name;
    const starNameSplit = starName.split(' ');
        return `<h1><u>${starName}</u>. Years ago you served my father <u>${pokeName}</u>, in the <u>${harryName.blood_status}</u> Wars. <br>
        Now <u>${pokeName}</u> begs you to help him in his struggle against the <u>${harryName.last}</u>. <br>
        I regret that I am unable to present <u>${pokeName}'s</u> request to you in person, <br>
        but my ship has fallen under attack, and I'm afraid my mission to bring you to <u>${harryName.house}</u> has failed. <br>
        I have placed information vital to the survival of the Rebellion into the memory systems of this R2 unit. <br>
        <u>${pokeName}'s</u> will know how to retrieve it. You must see this droid safely delivered to him on <u>${harryName.house}</u>. <br>
        This is our most desperate hour. Help me, <u>${starName}</u>. <br>
        You're my only hope.</h1>`;
}
console.log(createName());
server.listen(3000);