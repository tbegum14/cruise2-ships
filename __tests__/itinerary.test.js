const Itinerary = require("../src/itinerary");
const Ship = require("../src/ship");

describe("itinerary object", () => {
  describe("itinerary has ports", () => {
    let dover;
    let calais;
    let itin;
    let ship;

    beforeEach(() => {
      dover = {name: "Dover", ships: [], addShip: jest.fn(), removeShip: jest.fn()}
      calais = {name: "Calais", ships: [], addShip: jest.fn(), removeShip: jest.fn()}
      itin = new Itinerary([dover, calais]);
      ship = new Ship(itin);
    });
    test("itinerary class returns object", () => {
      expect(new Itinerary([dover, calais])).toBeInstanceOf(Object);
    });

    test("itinerary has a ports property", () => {
      expect(itin.ports).toEqual([dover, calais]);
    });

    test("setSail function throws error once no more ports remain", () => {
      ship.setSail();
      ship.dock();
      expect(() => ship.setSail()).toThrowError(
        "You have reached the end of the itinerary"
      );
    });
  });
});
