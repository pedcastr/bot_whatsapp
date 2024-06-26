const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client();

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('message', msg => {
    const chatId = msg.from;
    const currentTime = new Date().getTime();
    const userLastSeen = users[chatId] ? users[chatId].lastSeen : 0;
    const sixHoursInMs = 6 * 60 * 60 * 1000;

    if (!users[chatId] || currentTime - userLastSeen > sixHoursInMs) {
        const welcomeMessage = `Olá! Eu sou o Papaleguas, seu atendente virtual. Seja bem vindo(a) a Papa Tango Aluguel de Motos! É um prazer ter você aqui 😁😍\nMe conta, você já é nosso cliente?\n1 - Já sou cliente Papa Tango\n2 - Quero consultar preços, catálogos e fazer parte da melhor empresa de locação de motos 😎`;
        msg.reply(welcomeMessage);

        users[chatId] = {
            lastSeen: currentTime
        };
    } else {
        // Handle other messages
    }
});

module.exports = app;  // Para que Vercel possa detectar corretamente

client.initialize();
