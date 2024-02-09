# Knight's Travail

This project is a solution for the Odin Project's Knight's Travail assignment.

## Description

The goal of this project is to find the shortest path for a Chess Knight from a starting position to an end position on a chess board. The Knight's Travail uses a breadth-first search algorithm to find the shortest path.

## Code Structure

The `Travail` class is the main class in this project. It has the following methods:

- `constructor(gridMap, srcPos, destPos)`: Initializes the class with the grid map, source position, and destination position. It also sets up the direction array for the knight's possible moves, the visited array to keep track of visited positions, and the nodes array to store the nodes to be visited.

- `isValidPosition(newDirX, newDirY)`: Checks if a given position is valid (i.e., within the grid and not yet visited).

- `travail()`: Implements the breadth-first search algorithm to find the shortest path from the source position to the destination position.

- `constructPath(destPos)`: Constructs the shortest path from the source position to the destination position.

## Usage

To use this code, create an instance of the `Travail` class with the grid map, source position, and destination position. Then, call the `travail` method on the instance.

```javascript
import { Travail } from "./travail.js";

function chessBoard() {
    const res = [];
    for (let i = 0; i < 8; i++) {
        res.push([]);
        for (let j = 0; j < 8; j++) {
            res[i].push(( i + j ) % 2 === 0 ? 1 : 0);
        }
    }
    return res;
}


let grid = chessBoard();
const source = [0, 0];
const destination = [7, 7];

const knightTravail = new Travail(grid, source, destination);
const path = knightTravail.travail();
console.log(path);
```