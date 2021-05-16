document.getElementById("botaoEnviar").addEventListener("click",validaFormulario);



function validaFormulario(){

  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var telefone = document.getElementById("telefone").value;

  if (nome != "" &&  email != "" && telefone != ""){
    alert("Gatíssima, preencheu tudo!")
    } else {
    alert("You shall not pass! Preencha os dados, pfv")
  }
}


//listener: cada clique é cm se o js ouvisse o evento
//EventListener: de onde vem, ql evento ouvir, e oq fzr -> deqmvirá.addEventListener("evento", oq fzr)