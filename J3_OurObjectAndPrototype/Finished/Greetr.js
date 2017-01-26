(function(global, $) {
    // konstruktorfunktsioon
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);   
    }
    // prototüüp
    Greetr.prototype = {};
    // uus objekt
    Greetr.init = function(firstName, lastName, language) {
        
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
    }
    // uue objekti prototüüp seotakse greetr prototüübiga (ei pea kasutama 'new')
    Greetr.init.prototype = Greetr.prototype;
    // luuakse uus globaalne lühend
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));