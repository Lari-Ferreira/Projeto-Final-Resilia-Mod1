function validaResposta3(resposta){
  resposta = prompt("Sua Resposta").toLowerCase();
  var certo = "a";
  if (resposta == certo) {
  alert("Ai sim, parabéns! Clique em OK para ir para a próxima fase");
  return location = "./fase3.html"
  } else {
  alert("Poxa,talvez na pórxima");
  return location = "../gameover/gameover.html";
  }
}  