const { BrowserWindow, app } = require("electron");

let window;
const createMainWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
  });
  window.loadURL("http://localhost:3000");
  return window;
};

app.whenReady().then(() => {
  console.log("hello");
  window = createMainWindow();
});
