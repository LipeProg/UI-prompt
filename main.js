
// Importando os módulos do Electron necessários
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// Declarando a variável para armazenar a janela principal da aplicação
let mainWindow;

// Função para criar a janela principal
function createWindow() {
  // Criando uma nova janela do Electron
  mainWindow = new BrowserWindow({
    width: 800,     // Largura da janela em pixels
    height: 600,    // Altura da janela em pixels
    webPreferences: {
      // Configurações das preferências da web
      preload: path.join(__dirname, 'preload.js'),  // Caminho para o script de pré-carregamento
      nodeIntegration: true,  // Permite a integração com APIs Node.js no processo de renderização
    },
  });

  // Carregando o arquivo HTML principal da aplicação na janela
  mainWindow.loadFile('index.html');
}

// Evento 'ready' é emitido quando o Electron está pronto para criar janelas do navegador
app.on('ready', createWindow);

// Evento 'window-all-closed' é emitido quando todas as janelas são fechadas
app.on('window-all-closed', () => {
  // Verifica se o sistema operacional não é macOS (darwin)
  if (process.platform !== 'darwin') {
    app.quit();  // Fecha a aplicação
  }
});

// Evento 'activate' é emitido quando a aplicação é ativada (macOS)
app.on('activate', () => {
  // Verifica se não há nenhuma janela aberta
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();  // Cria uma nova janela
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
