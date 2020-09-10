/*const Parser = require('./Parser.js');
let parser = new Parser();

const sentences = [
    "regarder",
    "ouvrir",
    "ouvre",
    "prendre",
    "lire",
    "lire lettre",
    "ouvrir boite",
    "regarde boite",
    "regarder la boite",
    "aller au nord",
    "aller vers le sud",
    "sud aller vers le",
];

sentences.forEach((sentence)=>{
    try {
        let tokens = parser.parseText(sentence);
        console.log(sentence, tokens);
    } catch(e){
        console.error("Invalid syntax for sentence: ",sentence);
    }
});*/

const Game = require('./Game');
new Game();