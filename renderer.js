

// Acessando os métodos expostos pelo preload.js através do objeto 'window.electron'
const { sendCommandToMain, receiveCommandResult } = window.electron;

// Selecionando elementos do DOM
const commandForm = document.getElementById('commandForm');
const commandInput = document.getElementById('commandInput');
const outputDiv = document.getElementById('output');

// Event listener para enviar comando ao processar o formulário
commandForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Previne o comportamento padrão do formulário (envio/reload)

  const command = commandInput.value.trim(); // Obtém o comando digitado

  // Limpa o campo de entrada
  commandInput.value = '';

  // Exibe o comando digitado na saída
  outputDiv.innerHTML += `<p><strong>Você digitou:</strong> ${command}</p>`;

  // Envia o comando para o processo principal
  sendCommandToMain(command);
});

// Recebe resposta do processo principal e atualiza a interface
receiveCommandResult((result) => {
  outputDiv.innerHTML += `<p><strong>Resposta:</strong> ${result}</p>`;
});