class DropboxController {
  constructor({ appInstance }){
    this.appInstance = appInstance
  }

  addListeners = appInstance => {
    appInstance.get('/', (req, res) => res.send('Hello World!'))
  }
}

export { DropboxController }