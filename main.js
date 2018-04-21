const {
    app,
    BrowserWindow,
    clipboard,
    Menu,
    protocol,
    ipcMain
} = require('electron');
const {
    autoUpdater
} = require('electron-updater');

let template = [];
let win;
let output = '';

ipcMain.on('copy', (event, value) => {
    clipboard.writeText(value);
})

// OS X
if (process.platform === 'darwin') {
    const name = app.getName();
    const version = app.getVersion();

    template = [
  {
    label: 'Edit',
    submenu: [
        {
            label: `${name} v${version}`,
            role: 'version',
        },
        {
            role: 'undo'
        },
        {
            role: 'redo'
        },
        {
            type: 'separator'
        },
        {
            label: 'Copy',
            accelerator: 'CmdOrCtrl+C',
            click () {
                if (win && win.webContents) {
                    // sending to render process
                    win.webContents.send('copy', true);
                }
            }
        },
        {
            role: 'paste'
        },
        {
            role: 'pasteandmatchstyle'
        },
        {
            role: 'delete'
        },
        {
            role: 'selectall'
        },
        {
            type: 'separator'
        },
        {
            role: 'hide'
        },
        {
            role: 'hideothers'
        },
        {
            role: 'unhide'
        },
        {
            type: 'separator'
        },
        {
            role: 'quit'
        }
    ]
  }
];
};

const createDefaultWindow = () => {
    win = new BrowserWindow({
        titleBarStyle: 'hiddenInset',
        width: 420,
        maxWidth: 400,
        minWidth: 400,
        height: 160,
        maxHeight: 160,
        minHeight: 160,
        alwaysOnTop: false,
        closable: true,
        fullscreenable: false,
        maximizable: false
    });
    // win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    });

    win.loadURL(`file://${__dirname}/public/index.html`);

    return win;
}
autoUpdater.on('checking-for-update', () => {
  win.webContents.send('copy', true);
})
autoUpdater.on('update-available', (info) => {
  win.webContents.send('copy', true);
})
autoUpdater.on('update-not-available', (info) => {
  win.webContents.send('copy', true);
})
autoUpdater.on('error', (err) => {
  win.webContents.send('copy', true);
})
autoUpdater.on('download-progress', (progressObj) => {
  win.webContents.send('copy', true);
})
autoUpdater.on('update-downloaded', (info) => {
  win.webContents.send('copy', true);
});

ipcMain.on('NEW_WINDOW', () => {
    win.on('closed', () => {
        win = null;
    });

    win.loadURL(`file://${__dirname}/../../test.html`);
})

app.on('ready', () => {
    autoUpdater.checkForUpdatesAndNotify();
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    createDefaultWindow();
});

app.on('window-all-closed', () => {
    app.quit();
});
