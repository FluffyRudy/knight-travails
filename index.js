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
