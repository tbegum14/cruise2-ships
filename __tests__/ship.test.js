const Ship = require("../src/ship")
const Port = require("../src/port")
const Itinerary = require("../src/itinerary")

describe("ship object", ()=>{
    test("ship can be instantiated and returns an object", ()=>{
        const dover = new Port("Dover")
        const itin = new Itinerary([dover])
        expect(new Ship(itin)).toBeInstanceOf(Object) 
    })

    test("ship has a property of starting port which returns a port object", ()=>{
        const dover = new Port("Dover")
        const itin = new Itinerary([dover])
        const ship = new Ship(itin)
        expect(ship.currentPort).toEqual(dover)
    })
})

describe("a ship can set sail away from a starting port", ()=>{
    test("ship is not at a port once it has setsail", ()=>{
        const dover = new Port("Dover")
        const itin = new Itinerary([dover])
        const ship = new Ship(itin)        
        ship.setSail()
        expect(ship.currentPort).toBe(null)
    })
})

describe("a ship can dock at a different port to its starting port", ()=>{
    test("ships current port is different to when it was instantiated", ()=>{
        const dover = new Port("Dover")
        const calais = new Port("Calais")
        const itin = new Itinerary([dover, calais])
        const ship = new Ship(itin)
        ship.setSail()
        ship.dock()
        expect(ship.currentPort).toEqual(calais)
    })
})