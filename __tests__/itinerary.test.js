const Itinerary = require("../src/itinerary")
const Port = require("../src/port")
const Ship = require("../src/ship")

describe("itinerary object can be instantiated", ()=>{
    test("itinerary class returns object", ()=>{
        expect(new Itinerary()).toBeInstanceOf(Object) 
    })

    test("itinerary has a ports property", ()=>{
        const dover = new Port("Dover")
        const itin = new Itinerary([dover])
        expect(itin.ports).toEqual([dover])
    })
})

describe("ship stops setting sail once at the end of the itinerary", ()=>{
    test("setSail function throws error once no more ports remain", ()=>{
        const dover = new Port("Dover")
        const calais = new Port("Calais")
        const itin = new Itinerary([dover, calais])
        const ship = new Ship(itin)
        ship.setSail()
        ship.dock()
        expect(()=>ship.setSail()).toThrowError("You have reached the end of the itinerary")
    })
})