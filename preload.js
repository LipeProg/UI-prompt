const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  sendCommand: (command) => ipcRenderer.send('execute-command', command),
  onCommandResult: (callback) => ipcRenderer.on('command-result', callback),
});

