function desplegar(id, id2){
  var elemento = document.getElementById(id).style.display
  if(elemento == "" || elemento == "block"){
    document.getElementById(id).style.display="none";
    document.getElementById(id2).style.background="url("+desplegar1+")";
  } else {
    document.getElementById(id).style.display="block";
    document.getElementById(id2).style.background="url("+desplegar2+")";
  }
  return true;
}
