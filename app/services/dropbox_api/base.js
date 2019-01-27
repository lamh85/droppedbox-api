// require('dotenv').config()
import dotenv from 'dotenv'
import 'whatwg-fetch'

import { Dropbox } from 'dropbox'
import { DropboxTeam } from 'dropbox'

dotenv.config()

class DropboxApi {
  run({url, method, body, headers}) {
    const dropboxInstance = this.dropboxInstance()
  }

  buildOptions() {
    // do something
  }
  
  dropboxInstance() {
    return new Dropbox({
      fetch,
      accessToken: 'ENTER_TOKEN_HERE'
    })
  }
}

export { DropboxApi }