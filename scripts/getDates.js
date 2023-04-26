
let year = new Date().getFullYear()
document.getElementById('year').innerHTML = "&copy;" + year + "  Isai Mar Mexico" ;

let oLastModif = new Date(document.lastModified);
document.getElementById('lastModified').innerHTML = "Last Modification:" + oLastModif;
