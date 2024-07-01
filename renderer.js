const commandForm = document.getElementById('commandForm');
const commandInput = document.getElementById('commandInput');
const outputDiv = document.getElementById('output');

commandForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const command = commandInput.value.trim();

  // Limpar campo de entrada
  commandInput.value = '';

  // Exibir o comando digitado na saída
  outputDiv.innerHTML += `<p><strong>Você digitou:</strong> ${command}</p>`;

  // Enviar comando para o processo principal
  window.electronAPI.sendCommand(command);
});

// Receber resposta do processo principal
window.electronAPI.onCommandResult((event, result) => {
  outputDiv.innerHTML += `<p><strong>Resposta:</strong> ${result}</p>`;
});
