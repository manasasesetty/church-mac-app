const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    autoHideMenuBar: true
  });

  win.loadURL('https://blueviolet-kangaroo-688405.hostingersite.com/elementor-7/');
}

app.whenReady().then(() => {
  createWindow();
});