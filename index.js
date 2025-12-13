const { WebcastPushConnection } = require('tiktok-live-connector');
const axios = require('axios');

// CONFIGURACIÓN
const TIKTOK_USERNAME = "@miyorch46"; // Cámbialo por el tuyo cuando prendas stream
const STREAMERBOT_URL = "http://127.0.0.1:8080/DoAction";
const ACTION_ID_GIFT = "38c486d0-5e30-4cf3-b09e-e8eaccb09adf"; 

// CONEXIÓN
let tiktokConnection = new WebcastPushConnection(TIKTOK_USERNAME);

console.log(`🔌 Conectando al socket de ${TIKTOK_USERNAME}...`);

tiktokConnection.connect().then(state => {
    console.info(`✅ Conectado (Room ID: ${state.roomId})`);
}).catch(err => {
    console.error('❌ Error de conexión:', err);
});

// FUNCIÓN PARA ENVIAR A STREAMER.BOT
async function sendToStreamerBot(actionId, data) {
    try {
        await axios.post(STREAMERBOT_URL, {
            action: { id: actionId },
            args: data // Aquí van las variables (user, giftName, etc)
        });
        console.log(`📡 Enviado a Streamer.bot: ${data.event}`);
    } catch (error) {
        console.error("⚠️ Streamer.bot no responde. ¿Está abierto?");
    }
}

// --- EVENTOS ---

// 1. REGALOS
tiktokConnection.on('gift', data => {
    // Filtramos para evitar spam de combos (solo enviamos cuando termina el combo o no es combo)
    if (data.giftType === 1 && !data.repeatEnd) return; 

    console.log(`🎁 REGALO: ${data.nickname} envió ${data.giftName}`);
    
    sendToStreamerBot(ACTION_ID_GIFT, {
        event: 'gift',
        user: data.nickname,
        giftName: data.giftName,
        amount: data.repeatCount,
        giftId: data.giftId // Útil si quieres filtrar por ID específico luego
    });
});

// 2. CHAT (Opcional, consume más recursos si hay mucho spam)
tiktokConnection.on('chat', data => {
    // console.log(`💬 ${data.nickname}: ${data.comment}`);
    // Podrías crear otra acción para leer el chat con TTS
});

// 3. FOLLOW
tiktokConnection.on('follow', data => {
    console.log(`➕ Nuevo seguidor: ${data.nickname}`);
    // Aquí podrías llamar a otra Action ID para followers
});

// Listener de CHAT modificado para PRUEBAS
tiktokConnection.on('chat', data => {
    // Solo tomamos el primer mensaje que llegue para no explotar tus oídos
    console.log(`💬 Mensaje de prueba de: ${data.nickname}`);
    
    sendToStreamerBot(ACTION_ID_GIFT, {
        event: 'gift', // Le mentimos diciendo que es un regalo
        user: data.nickname, // Usamos el nombre real del que escribió
        giftName: 'MensajeChat', // Para que sepas que fue un chat
        amount: 1
    });
});