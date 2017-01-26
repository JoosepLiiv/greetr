// loob uue objekti
var g = G$('John', 'Doe');

// määrab keeele ja tervituse
g.greet().setLang('es').greet(true).log();

// määratakse,et login nupp kasutab objekti
$('#login').click(function() {
   
    // uus objekt, keda tervitada
    var loginGrtr = G$('John', 'Doe');
    
     // peidetakse login div
    $('#logindiv').hide();
    
     // tervitatakse logimisel
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
    
});