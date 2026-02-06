const mineflayer = require("mineflayer");

function randomName() {
  const num = Math.floor(Math.random() * 999) + 1;
  return `btebot${num}`;
}

function createBot() {
  const bot = mineflayer.createBot({
    host: "emerald.magmanode.com", // IP do servidor
    port: 25939, // porta
    username: randomName(),
    version: "1.16.4", // versão mais próxima suportada
  });

  bot.on("spawn", () => {
    console.log(`Bot conectado como ${bot.username}`);
  });

  bot.on("kicked", (reason) => {
    console.log("Kickado:", reason);
  });

  bot.on("end", () => {
    console.log("Desconectado. Reconectando em 5s...");
    setTimeout(createBot, 5000);
  });

  bot.on("error", (err) => {
    console.log("Erro:", err.message);
  });
}

createBot();
