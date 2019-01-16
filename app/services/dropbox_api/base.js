require('dotenv').config()

class DropboxApi {
  run = ({url, method, body, headers}) => {
    
  }

  request = () => {
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Hubot',
        login: 'hubot',
      })
    })
  }

  buildOptions = () => {
    // do something
  }
}

export { DropboxApi }