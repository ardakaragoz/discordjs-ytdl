const domainProvider = require('./domainprovider')
const siteName = require('./sitename')
const endpoint = require('./endpoint')
let first = domainProvider
let middle = siteName()
let last = endpoint(false, true)
const linktoyt = privacy => {
    if (privacy === false) return console.log('PRIVACY DEACTIVATED')
    return first + middle + last
}
module.exports = linktoyt