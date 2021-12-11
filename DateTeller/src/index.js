  const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
const { autoUpdater } = require('electron-updater');


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 850,
    frame: false,
//    titleBarStyle: 'hidden',
//    titleBarOverlay: {
//      color: '#deb887',
//      symbolColor: '#4a4a4a'
//    },
    icon: __dirname + '/img/date_icon.jpeg',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
//  mainWindow.webContents.openDevTools();
//  mainWindow.once('ready-to-show', () => {
//    autoUpdater.checkForUpdatesAndNotify();
//    });
};

var navbar = Menu.buildFromTemplate([
  {
    label: 'Home',
    submenu: [
      {type: 'separator'},
      {
        label: 'Exit',
        click() {
          app.quit();
        }
      }
    ]
  },
])

Menu.setApplicationMenu(navbar);

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

require('update-electron-app')({
  updateInterval: '1 hour'
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

ipcMain.on('app_version', (event) => {
  event.returnValue = "I got the msg!";
  event.sender.send('app_version', { version: app.getVersion() });
});

ipcMain.on('minimizing-event', (event) => {
  event.returnValue = "I got the msg!";
  BrowserWindow.getFocusedWindow().minimize();
});

ipcMain.on('maximizing-event', (event) => {
  event.returnValue = "I got the msg!";
  BrowserWindow.getFocusedWindow().isMaximized() ? BrowserWindow.getFocusedWindow().restore() : BrowserWindow.getFocusedWindow().maximize();
});

ipcMain.on('closing-event', (event) => {
  event.returnValue = "I got the msg!";
  BrowserWindow.getFocusedWindow().close();
});


ipcMain.on('hotspot-event', ( event ) => {
  event.returnValue = 'Message received!'
  require('electron').shell.openExternal(`https://github.com/Mikkeep/DateTeller`);
})

/*
autoUpdater.on('update-available', () => {
  mainWindow.webContents.send('update_available');
});

autoUpdater.on('update-downloaded', () => {
  mainWindow.webContents.send('update_downloaded');
});

ipcMain.on('restart_app', () => {
  autoUpdater.quitAndInstall();
});
*/