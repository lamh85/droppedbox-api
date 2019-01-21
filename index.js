// Libraries
import express from 'express'
// Controllers
import { DropboxController } from './controllers'

const app = express()
const port = 3000

(new DropboxController(app)).addListeners()

app.listen(port, () => console.log(`Example app listening on port ${port}!`))