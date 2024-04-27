import server from "minecraft-status"

let onlineimrpg = null;

const pingServer = (retries = 5) => {
    if (retries === 0) {
        onlineimrpg = 'Перезагрузка';
        return;
    }

    server.MinecraftServerListPing.ping(5, '94.141.101.121', 25565, 3000)
        .then(res => {
            onlineimrpg = res.players.online;
        })
        .catch(() => {
            pingServer(retries - 1);
        });
};

setInterval(pingServer, 30 * 1000);

export {onlineimrpg};
