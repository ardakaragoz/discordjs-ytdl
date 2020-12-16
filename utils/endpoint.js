function endpoint(localhost, http) {
    if (localhost === true){
        return;
    }
    if (http !== true) return;
    return 'watch?v='
}

module.exports = endpoint