class CommandManager {
    constructor(game_instance){
        this.game = game_instance;
    }

    process_command(tokens){
        let verb = tokens.find(function(token){
            return token.type === 'verb';
        });
        let noun = tokens.find(function(token){
            return token.type === 'noun';
        });

        if(noun){
            this.game.target_item(noun.value);
        }

        if(this.game.check_target()){
            switch(verb.value) {
                case "lire" : {this.game.read(); break;}
                default: {throw Error('Unknown command');}
            }
        }
    }

}

module.exports = CommandManager;