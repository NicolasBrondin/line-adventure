const Parser = require('./Parser'),
InputManager = require('./InputManager'),
CommandManager = require('./CommandManager');

class Game {
    constructor (){
        this.parser = new Parser();
        this.command_manager = new CommandManager(this);
        this.input_manager = new InputManager(this.command_listener);
        this.input_manager.request_input();

        this.target;
        this.world = [
            {name: "lettre", text:"J'ai pris les clés et fermé la porte, si tu veux sortir trouve le double, je ne sais plus où il est !"}
        ];
    }


    command_listener = (line) => {
        try {
            let tokens = this.parser.parseText(line);
            this.command_manager.process_command(tokens);
        } catch(e){
            console.log("Je n'ai pas compris cette commande.");
            this.input_manager.request_input();
        }
    }

    target_item(target_name){
        let target_item = this.world.find(function(item){
            return item.name.toLowerCase() === target_name.toLowerCase();
        })
        if(target_item){
            this.target = target_item;
        } else {
            console.log("Je ne sais pas de quel objet vous parlez.");
        }
    }

    check_target(){
        if(this.target){
            return true;
        } else {
            console.log("Vous devez spécifier un objet");
        }
    }

    read(){
        if(this.target.text){
            console.log(this.target.text);
        } else {
            console.log("Vous ne pouvez pas lire cet objet");
        }
        this.input_manager.request_input();
    }

}

module.exports = Game;