const Itinerary = require("../src/itinerary");
const Port = require("../src/port");
const Ship = require("../src/ship");

describe("itinerary object", () => {
  describe("itinerary has ports", () => {
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
