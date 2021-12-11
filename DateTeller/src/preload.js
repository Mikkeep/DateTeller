const electron = require('electron')
const ipc = electron.ipcRenderer

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('githubButton').addEventListener("click", function () {
        let active_hotspot_id = localStorage.getItem('active_hotspot_id')
        const reply = ipc.sendSync('hotspot-event', active_hotspot_id)
    });
})


window.addEventListener('DOMContentLoaded', () => {
        const reply = ipc.send('app_version', "Get the fucking message noob!");
})

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('min-btn').addEventListener("click", function () {
        const reply = ipc.sendSync('minimizing-event', "Lets minimize this window")
    });
})

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('max-btn').addEventListener("click", function () {
        const reply = ipc.sendSync('maximizing-event', "Lets maximize this window")
    });
})

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('close-btn').addEventListener("click", function () {
        const reply = ipc.sendSync('closing-event', "Lets close this window")
    });
})

/*


const version = document.getElementById('version');
window.addEventListener('DOMContentLoaded', () => {
ipc.send('app_version');
ipc.on('app_version', (event, arg) => {
  ipc.removeAllListeners('app_version');
  version.innerText = 'PERKELE';
    });
})



*/