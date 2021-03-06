$(document).ready(function(){
/*Clase*/
function StartPage(){
  /*Atributos*/
  /*Metodo*/
  this.formatDate = function(date){
    var monthNames = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return (day + ' ' + monthNames[monthIndex] + ' ' + year +' ');
  }

  this.formatHour = function(date){
    return (date.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true}));
  }

  this.pokemonPet = function(){
    var pokemonList = new Array("charizard.gif","blastoise.gif","ivysaur.gif","poliwhirl.gif","bender.gif","einstein.gif","curie.gif","tesla.gif","darwin.gif","pythagoras.gif","hawking.gif","newton.gif");
    var longitud=pokemonList.length-1;
    var aleatorio = Math.round(Math.random()*longitud);

    return ('<img src="images/characters/'+pokemonList[aleatorio]+'" alt=""><img/>');
  }

  this.consola = function(){
    var egg = console.log("There are no easter eggs here.");
    var rabbit = console.log("    (\\_/)");
    var rabbit = console.log("   =('_')=");
    var email = console.log("GitHub: https://github.com/Jivich/");
    return (egg, rabbit, email);
  }

}/*End class*/

/*Instancia*/
  var StartPage2 = new StartPage();

  var imprimirFecha = StartPage2.formatDate(new Date());
  var imprimirHora = StartPage2.formatHour(new Date());
  var imprimePet = StartPage2.pokemonPet();
  var imprimeConsola = StartPage2.consola();

  // console.log(Fecha.formatDate(new Date()));
  // console.log(Fecha.formatHour(new Date()));
  // console.log(imprimePet);
  // console.log(imprimeConsola);
  document.getElementById("time").innerHTML = (imprimirHora+", "+imprimirFecha);
  document.getElementById("Left").innerHTML = (imprimePet);
});
