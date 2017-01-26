(function(global, $) {
    
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);   
    }
    // toetatud keele
    var supportedLangs = ['en', 'es'];
    // tervitused
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    // viisakad tervitused
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    // logimise teated (inglise ja hispaania keeles)
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };
    // prototüüp
    Greetr.prototype = {
        // tagastab täisnime
        fullName: function() {
            return this.firstName + ' ' + this.lastName;   
        },
        // kontrollib keelt
        validate: function() {
             if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";   
             }
        },
        // tagastab vastavas keeles tervituse + eesnime
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        // tagastab viisaka tervituse koos täisnimega
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();  
        },
        // funktsioon, toimib vastavalt sellele, kas tegu on ametliku või mitteametliku tervitusega
        greet: function(formal) {
            var msg;
            
            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();  
            }
            else {
                msg = this.greeting();  
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },
        // console log funktsioon
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName()); 
            }
                            
            return this;
        },
        // keele määramine
        setLang: function(lang) {
            this.language = lang;
                    
            this.validate();
            
            return this;
        }
        
    };
    Greetr.init = function(firstName, lastName, language) {
        
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
    }
    
    Greetr.init.prototype = Greetr.prototype;
    
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));