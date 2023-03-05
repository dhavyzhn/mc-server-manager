import { app, BrowserViewConstructorOptions, BrowserWindow } from 'electron';

var mainWindow: BrowserWindow | null;

function createWindow() {

    mainWindow = new BrowserWindow({
        frame: false,
        show: false,
        minWidth: 1280,
        minHeight: 720,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    app.isPackaged ? mainWindow.loadFile('') : mainWindow.loadURL('http://localhost:5173');
    mainWindow.on('ready-to-show', mainWindow.show);
}

app.on('ready', createWindow);