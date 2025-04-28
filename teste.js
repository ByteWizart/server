const mineflayer = require('mineflayer');
const { mineflayerViewer } = require('prismarine-viewer'); // ou mineflayer-web-viewer dependendo da versão

const bot = mineflayer.createBot({
  host: 'gold.magmanodr.com',
  port: 31214,
  username: 'BotCam01',  // Troque pelo nome que quiser
  version: false         // Deixe detectar automático
});

// Quando o bot conectar
bot.once('spawn', () => {
  console.log('Bot conectado com sucesso! Abrindo câmera...');
  
  // Iniciar o visualizador na porta 3007 (você acessa depois: http://localhost:3007)
  mineflayerViewer(bot, { port: 3007, firstPerson: true });
  
  // Atualiza título da página com o horário atual a cada segundo
  setInterval(() => {
    const now = new Date();
    bot.viewer.title = `BotCam01 - ${now.toLocaleTimeString()}`;
  }, 1000);
});

// Se o bot cair, mostra o motivo
bot.on('end', () => {
  console.log('Bot desconectado!');
});

bot.on('error', (err) => {
  console.log('Erro:', err);
});
