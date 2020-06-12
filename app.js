import {Token} from '/models/token.js'
App({
  onLaunch: function () {
     const token = new Token()
     token.verify()
  }
})