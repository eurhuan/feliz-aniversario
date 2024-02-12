document.getElementById('mostrarMensagem').addEventListener('click', function() {
  // Obter a data atual
  var dataAtual = new Date();
  
  // Definir a data limite como 15 de fevereiro
  var dataLimite = new Date(dataAtual.getFullYear(), 1, 15); // O mês é 1 (fevereiro é 1) e o dia é 15
  
  // Verificar se a data atual é antes da data limite
  if (dataAtual < dataLimite) {
    alert('Você não pode ver a surpresa antes do dia 15 de fevereiro!');
  } else {
    // Se a data atual for após a data limite, abrir o modal com a mensagem de surpresa
    $('#modalSurpresa').modal('show');
  }
});
