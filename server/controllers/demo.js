getuser = require('../tools/getUser')()

module.exports = ctx => {
  data = getuser.getUser()
  ctx.state.data = {
    tet: data
  }
}