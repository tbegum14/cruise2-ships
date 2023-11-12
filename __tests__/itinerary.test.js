const Itinerary = require("../src/itinerary")
const Port = require("../src/port")

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