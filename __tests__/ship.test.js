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
      dover = {
        name: "Dover",
        ships: [],
        addShip: jest.fn(),
        removeShip: jest.fn()
      }
      calais = {
        name: "Calais",
        ships: [],
        addShip: jest.fn(),
        removeShip: jest.fn()
      }
      itin = {ports: [dover, calais]}
      ship = new Ship(itin);
    });
    test("ship can be instantiated and returns an object", () => {
      expect(new Ship(itin)).toBeInstanceOf(Object);
    });

    test("ship has a property of starting port which returns a port object", () => {
      expect(ship.currentPort).toEqual(dover);
    });

    test("ship gets added to port on instantiation", () => {
      expect(dover.addShip).toHaveBeenCalledWith(ship);
    });

    test("ship can set sail", () => {
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
      expect(dover.removeShip).toHaveBeenCalledWith(ship)
    });

    test("ships can dock at a different port", () => {
      ship.setSail();
      ship.dock();
      expect(calais.addShip).toHaveBeenCalledWith(ship);
    });
  });
});
