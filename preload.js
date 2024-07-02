// Módulo 'contextBridge' é necessário para prevenir vulnerabilidades de segurança no Electron
const { contextBridge, ipcRenderer } = require('electron');

// Expondo métodos seguros para o processo de renderização através do contexto de ponte
contextBridge.exposeInMainWorld('electron', {
  // Método para enviar comandos para o processo principal
  sendCommandToMain: (command) => {
    ipcRenderer.send('execute-command', command);
  },

  // Método para receber resultados do processo principal
  receiveCommandResult: (callback) => {
    ipcRenderer.on('command-result', (event, result) => {
      callback(result);
    });
  },
});

