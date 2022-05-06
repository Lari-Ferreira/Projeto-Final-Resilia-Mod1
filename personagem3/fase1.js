function validaResposta3(resposta) {
    resposta = prompt("Sua Resposta").toLowerCase();
    var certo = "b";
    if (resposta == certo) {
     alert("Voce acertou! Clique em OK para ir para a próxima fase");
     return location = "./fase2.html"
    } else {
      alert("não foi dessa vez");
      return location = "../gameover/gameover.html";
    }
}  