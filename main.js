const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const isMac = process.platform === 'darwin';
  const win = new BrowserWindow({
    width: 920,
    height: 760,
    minWidth: 760,
    minHeight: 640,
    title: 'Project Cost Calculator',
    titleBarStyle: isMac ? 'hiddenInset' : 'default',
    backgroundColor: '#eef1f6',
    webPreferences: { contextIsolation: true }
  });
  win.setMenuBarVisibility(false);
  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
