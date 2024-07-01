const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
    },
  });

  mainWindow.loadFile('index.html');
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Listener para receber comandos do renderer process (interface)
ipcMain.on('execute-command', (event, command) => {
  console.log(`Comando recebido: ${command}`);

  // Aqui você adicionaria a lógica de backend para processar o comando
  // e enviar a resposta de volta para a interface
  // Exemplo:
  // const result = processCommand(command);
  // event.sender.send('command-result', result);

  // Para fins de demonstração, vamos enviar uma resposta estática
  event.sender.send('command-result', `Você enviou o comando: ${command}`);
});
