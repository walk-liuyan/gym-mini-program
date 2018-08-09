import REG from './reg'

let baseURL

if (process.env.BUILD_ENV === 'production') {
  baseURL = {
    API: 'https://v2.api.movinsale.com/v2'
  }
} else if (process.env.BUILD_ENV === 'test') {
} else {
  baseURL = {
    API: 'https://v2.api.movinsale.com/v2'
  }
}

export {
  baseURL,
  REG
}
