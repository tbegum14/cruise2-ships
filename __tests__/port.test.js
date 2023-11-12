const Port = require("../src/port")

describe("port can be instantiated", ()=>{
    test("when instantiated port returns an object", ()=>{
        expect(new Port()).toBeInstanceOf(Object)
    })

    test("port has a name property", ()=>{
        const port = new Port("Dover")
        expect(port.name).toBe("Dover")
    })
})