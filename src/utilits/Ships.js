class Ship {
  shipWidth;
  shipHeight;

  constructor(shipHeight) {
    this.shipWidth = 1;
    this.shipHeight = shipHeight;
  }
}

const carrier = new Ship(4);
const cruiser = new Ship(3);
const destroyer = new Ship(2);
const scout = new Ship(1);

export const ships = [];
ships.push(
  carrier,
  cruiser,
  cruiser,
  destroyer,
  destroyer,
  destroyer,
  scout,
  scout,
  scout,
  scout
);
