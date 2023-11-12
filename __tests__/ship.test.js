const Ship = require("../src/ship")

describe("ship object", ()=>{
    test("ship can be instantiated and returns an object", ()=>{
        expect(new Ship()).toBeInstanceOf(Object) 
    })

    test("ship has a property of starting port", ()=>{
        const ship = new Ship("Dover")
        expect(ship.startingPort).toEqual("Dover")
    })
})