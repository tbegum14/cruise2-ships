const Port = require("../src/port");

describe("port", () => {
  describe("port is instantiated", () => {
    let port;
    beforeEach(() => {
      port = new Port("Dover");
    });
    test("when instantiated port returns an object", () => {
      expect(port).toBeInstanceOf(Object);
    });

    test("port has a name property", () => {
      expect(port.name).toBe("Dover");
    });

    test("port has a ships property", () => {
      expect(port.ships).toEqual([]);
    });
  });
});

describe("adding and removing ships to port", () => {
  const port = new Port("Dover");
  const qmary = jest.fn();
  const titan = jest.fn();
  port.addShip(qmary);
  port.addShip(titan);
  test("addShip adds a ship to port ships property", () => {
    expect(port.ships).toEqual([qmary, titan]);
  });

  test("removeShip removes ship from ships property", () => {
    port.removeShip(qmary);
    expect(port.ships).toEqual([titan]);
  });
});
