class Parser {
    constructor(){
        
        this.infinitive_verbs = [
            "prendre",
            "ouvrir",
            "regarder",
            "lire",
            "aller",
            "poser"
        ]

        this.articles = [
            "le",
            "la",
            "au"
        ];

        this.prepositions = [
            "vers",
            "sur",
            "dans"
        ]

        this.nouns = [
            "boite",
            "lettre",
            "nord",
            "sud"
        ];

    }

    INFINITIVE_VERB(word){
        let result = this.infinitive_verbs.find((verb)=>{return verb === word.toLowerCase();});
        return result ? {type: "verb", value: result} : null;
    }

    NOUN(word){
        let result = this.nouns.find((noun)=>{return noun === word.toLowerCase();});
        return result ? {type: "noun", value: result} : null;
    }

    ARTICLE(word){
        let result = this.articles.find((article)=>{return article === word.toLowerCase();});
        return result ? {type: "article", value: result} : null;
    }

    PREPOSITION(word){
        let result = this.prepositions.find((preposition)=>{return preposition === word.toLowerCase();});
        return result ? {type: "preposition", value: result} : null;
    }

    parseText(str){
        let tokens = [];
        let str_array = str.split(' ');

        let syntaxic_tree = [
            [this.INFINITIVE_VERB.bind(this),this.PREPOSITION.bind(this), this.ARTICLE.bind(this), this.NOUN.bind(this)],
            [this.INFINITIVE_VERB.bind(this),this.ARTICLE.bind(this), this.NOUN.bind(this)],
            [this.INFINITIVE_VERB.bind(this), this.NOUN.bind(this)],
            [this.INFINITIVE_VERB.bind(this)]
        ];

        let success = syntaxic_tree.some(function(syntaxic_branch){
            let local_str_array = [...str_array];
            let local_tokens = [];
            let valid_syntax = syntaxic_branch.every(function(syntaxic_token){
                let token = local_str_array[0] ? syntaxic_token(local_str_array[0].toLowerCase()) : null;
                if(token){
                    local_tokens.push(token);
                    local_str_array.splice(0,1);
                    return true;
                }
                return false;
            });
            if(valid_syntax && local_str_array.length === 0){
                tokens = local_tokens;
                return true;
            }
            return false;
        });
        if(!success){
            throw new Error("ParsingError");
        }
        return tokens;
    }
}

module.exports = Parser;