esta é uma interface para o projeto

explicando:

CADA ARQUIVO -> main.js: Este é o arquivo principal do Electron. Ele é responsável por configurar a janela principal da aplicação,
                         lidar com eventos do ciclo de vida da aplicação (como quando a aplicação está pronta ou quando todas as janelas são fechadas),
                         e também por gerenciar a comunicação entre os processos principal e renderer (frontend).

                preload.js: Este arquivo é usado para carregar scripts na renderização do Electron.
                            É útil para pré-carregar módulos ou funções específicas que serão utilizadas no contexto da renderização do Electron,
                            garantindo um ambiente controlado e seguro para executar operações no frontend.

                renderer.js: Este script controla a lógica do frontend da interface.
                             Ele é responsável por capturar eventos do usuário na interface, como enviar comandos digitados e exibir os resultados na tela.
                             Ele se comunica com o processo principal (main.js) através do módulo ipcRenderer do Electron para enviar comandos e receber resultados.

                index.html: Este arquivo HTML contém a estrutura da interface de usuário que será exibida na janela do Electron.
                            Ele inclui elementos como formulários para entrada de comandos e áreas para exibir resultados.
                            Este arquivo interage diretamente com o renderer.js para atualizar dinamicamente a interface com os resultados dos comandos processados.

        Resumo ->  Backend (main.js): Configura a aplicação Electron, gerencia o ciclo de vida da janela principal e facilita a comunicação entre processos.

                   Frontend (renderer.js): Lida com a interação do usuário na interface, envia comandos para processamento no backend e atualiza dinamicamente a interface com os resultados recebidos.
                
PARA ADICONAR A LOGICA ->  
