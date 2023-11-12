const Port = require("../src/port");

describe("port can be instantiated", () => {
  test("when instantiated port returns an object", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  test("port has a name property", () => {
    const port = new Port("Dover");
    expect(port.name).toBe("Dover");
  });

  test("port has a ships property", () => {
    const port = new Port("Dover");
    expect(port.ships).toEqual([]);
  });
});

describe("adding and removing ships to port", () => {
  const port = new Port("Dover");
  const qmary = {};
  const titan = {};
  port.addShip(qmary);
  port.addShip(titan);
  test("addShip adds a ship to port ships property", () => {
    expect(port.ships).toEqual([qmary, titan]);
  });

  test("removeShip removes ship from ships property", ()=>{
    port.removeShip(qmary)
    expect(port.ships).toEqual([titan])
  })
});
