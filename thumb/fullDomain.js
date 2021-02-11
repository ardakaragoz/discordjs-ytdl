module.exports = class {
    constructor(url){
        this.url = url 
        this.fulldomain = ""
    }
    subDomain(sub){
        return this.fulldomain += 'https://' + sub + '.' + this.url + '.com'
    }
}