const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

describe("ship object", () => {
  describe("has ports and an itinerary", () => {
    let dover;
    let calais;
    let itin;
    let ship;
    beforeEach(() => {
      dover = new Port("Dover");
      calais = new Port("Calais");
      itin = new Itinerary([dover, calais]);
      ship = new Ship(itin);
    });
    test("ship can be instantiated and returns an object", () => {
      expect(new Ship(itin)).toBeInstanceOf(Object);
    });

    test("ship has a property of starting port which returns a port object", () => {
      expect(ship.currentPort).toEqual(dover);
    });

    test("ship gets added to port on instantiation", () => {
      expect(dover.ships).toContain(ship);
    });

    test("ship is not at a port once it has setsail", () => {
      ship.setSail();
      expect(ship.currentPort).toBe(null);
    });

    test("ships current port is different to when it was instantiated", () => {
      ship.setSail();
      ship.dock();
      expect(ship.currentPort).toEqual(calais);
    });
  });
});
