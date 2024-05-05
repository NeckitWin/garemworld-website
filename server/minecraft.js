import server from "minecraft-status"

let onlineim = null;

const pingServer = (retries = 5) => {
    if (retries === 0) {
        onlineim = 'Перезагрузка';
        return;
    }

    server.MinecraftServerListPing.ping(5, '94.141.101.121', 25565, 3000)
        .then(res => {
            onlineim = res.players.online;
        })
        .catch(() => {
            pingServer(retries - 1);
        });
};

setInterval(pingServer, 30 * 1000);

export {onlineim};
