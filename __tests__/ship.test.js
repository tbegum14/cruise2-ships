const Ship = require("../src/ship")
const Port = require("../src/port")

describe("ship object", ()=>{
    test("ship can be instantiated and returns an object", ()=>{
        expect(new Ship()).toBeInstanceOf(Object) 
    })

    test("ship has a property of starting port which returns a port object", ()=>{
        const dover = new Port("Dover")
        const ship = new Ship(dover)
        expect(ship.currentPort).toEqual(dover)
    })
})

describe("a ship can set sail away from a starting port", ()=>{
    test("ship is not at a port once it has setsail", ()=>{
        const ship = new Ship("Dover")
        ship.setSail()
        expect(ship.currentPort).toBe(null)
    })
})

describe("a ship can dock at a different port to its starting port", ()=>{
    test("ships current port is different to when it was instantiated", ()=>{
        const dover = new Port("Dover")
        const calais = new Port("Calais")
        const ship = new Ship(dover)
        ship.setSail()
        ship.dock(calais)
        expect(ship.currentPort).toEqual(calais)
    })
})