class DropboxController {
  constructor({ app }){
    this.app = app
  }

  addListeners() {
    this.app.get('/', (req, res) => res.send('Hello World!'))
  }
}

export { DropboxController }