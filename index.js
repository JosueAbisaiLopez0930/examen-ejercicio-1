const { app, BrowserWindow } = require('electron');

function createWindow() {

    let win = new BrowserWindow({
        width: 900,
        height: 700,
        center: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html')
}

app.whenReady().then(createWindow);
