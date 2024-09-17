const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  saveData: (data) => ipcRenderer.send('save-data', data),
  onSaveDataReply: (callback) => ipcRenderer.on('save-data-reply', (event, response) => callback(response)),
});

// interagir avec ton backend pour l'authentification

contextBridge.exposeInMainWorld('api', {
  login: async (email, password) => {
    return await ipcRenderer.invoke('login', { email, password });
  },
  logout: () => ipcRenderer.send('logout'),
});
