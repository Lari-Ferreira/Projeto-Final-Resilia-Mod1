function validaResposta(resposta) {
    resposta = prompt("Sua Resposta").toLowerCase();
    var certo = "b";
    if (resposta == certo) {
     alert("Arrasou, você é fera! Clique em OK para pegar seu troféu");
     return location = "../venceu/ganhou.html"
    } else {
      alert("Poxa, mais um pouco e chegava lá");
      return location = "../gameover/gameover.html";
    }
}