const electron = require('electron')
const ipc = electron.ipcRenderer

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('githubButton').addEventListener("click", function () {
        let active_hotspot_id = localStorage.getItem('active_hotspot_id')
        const reply = ipc.sendSync('hotspot-event', active_hotspot_id)
    });
})
