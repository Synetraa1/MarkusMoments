/* Sivu burgerin asetuksia */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive"; // Lisää "responsive" luokka, jos navigaatiopalkilla ei vielä ole sitä
  } else {
    x.className = "topnav"; // Muuten palauta alkuperäinen "topnav" luokka
  }
}