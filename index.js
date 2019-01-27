// Libraries
const express = require('express')

// Controllers
import { DropboxController } from './app/controllers'

const app = express()
const port = 3000

const dropboxController = new DropboxController({app})
dropboxController.addListeners()

app.listen(port, () => console.log(`Example app listening on port ${port}!`))