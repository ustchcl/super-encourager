const { getConfiguration } = require('../global/util.js')
const { getGlobalState } = require('../global/global-state.js')
exports.handle = function(arg) {
    let config = getConfiguration()
    let globalState = getGlobalState()
    return { config, globalState }
}