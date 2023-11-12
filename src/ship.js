const Itinerary = require("./itinerary")
class Ship {
    constructor(itinerary){
        this.itinerary = itinerary
        this.currentPort = itinerary.ports[0]
        this.previousPort = null
    }

    setSail() {
        this.previousPort = this.currentPort
        this.currentPort = null
    }

    dock() {
        const newInd = this.itinerary.ports.indexOf(this.previousPort)+1
        this.currentPort = this.itinerary.ports[newInd]
    }
}

module.exports = Ship;