const readline = require('readline');

class InputManager {
    constructor(on_command){
        this.on_command = on_command;
    }

    request_input(){
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on('line', (input) => {
            rl.close();
            this.on_command(input);
        });
    }

}

module.exports = InputManager;