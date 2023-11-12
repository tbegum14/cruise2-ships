class Ship {
    constructor(port){
        this.currentPort = port
    }

    setSail() {
        this.currentPort = null
    }

    dock(newPort) {
        this.currentPort = newPort
    }
}

module.exports = Ship;