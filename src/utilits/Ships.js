class Ship {
  shipWidth;
  shipHeight;

  constructor(shipHeight) {
    this.shipWidth = 1;
    this.shipHeight = shipHeight;
  }

  canPlaceShip(grid, x, y, isHorizontal) {
    for (let i = 0; i < this.shipHeight; i++) {
      const newX = isHorizontal ? x : x + i;
      const newY = isHorizontal ? y + i : y;

      // Check bounds
      if (newX < 0 || newY < 0 || newX >= grid.length || newY >= grid[0].length)
        return false;

      // Check if space is occupied
      if (grid[newX][newY] !== 0) return false;

      // Check for gaps
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= this.shipHeight; dy++) {
          const gapX = isHorizontal ? x + dx : x + dy;
          const gapY = isHorizontal ? y + dy : y + dx;
          if (
            gapX >= 0 &&
            gapY >= 0 &&
            gapX < grid.length &&
            gapY < grid[0].length
          ) {
            if (grid[gapX][gapY] !== 0) return false; // Occupied or not in bounds
          }
        }
      }
    }
    return true;
  }

  placeShip(grid, x, y, isHorizontal) {
    const cells = [];
    for (let i = 0; i < this.shipHeight; i++) {
      const newX = isHorizontal ? x : x + i;
      const newY = isHorizontal ? y + i : y;
      grid[newX][newY] = this.shipHeight;
      cells.push(newX * grid[0].length + newY); // Convert coordinates to cell IDs
    }
    return cells;
  }
}

const ships = [
  new Ship(4),
  new Ship(3),
  new Ship(3),
  new Ship(2),
  new Ship(2),
  new Ship(2),
  new Ship(1),
  new Ship(1),
  new Ship(1),
  new Ship(1),
];

export { ships };
