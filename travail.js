export class Travail {
    constructor(gridMap, srcPos, destPos) {
        this.gridMap = gridMap;
        this.srcPos = srcPos;
        this.destPos = destPos;
        this.maxRows = gridMap.length;
        this.maxCols = gridMap[0].length;
        this.direction = [ 
            [2, 1], [1, 2], [2, -1], [1, -2],
            [-1, 2], [-2, 1], [-1, -2], [-2, -1]
        ];        
        this.visited = new Array(this.maxRows).fill(null).map(() => new Array(this.maxCols).fill(false));
        this.nodes = [];
        this.path = new Array(this.maxRows).fill(null).map(() => new Array(this.maxCols).fill(null));
        this.pathLength = 0;
    }

    isValidPosition(newDirX, newDirY) {
        return newDirX >= 0 && newDirX < this.maxRows &&
               newDirY >= 0 && newDirY < this.maxCols &&
               !this.visited[newDirX][newDirY];
    }
    
    travail() {
        const [startRow, startCol] = this.srcPos; 
        this.nodes.push(this.srcPos);
        this.visited[startRow][startCol] = true;

        while (this.nodes.length > 0) {
            const [srcRow, srcCol] = this.nodes.shift();

            if (srcRow === this.destPos[0] && srcCol === this.destPos[1]) {
                const result = this.constructPath(this.destPos);
                return result;
            }
            
            for (let i = 0; i < this.direction.length; i++) {
                const [dirX, dirY] = this.direction[i];
                const newDirX = srcRow + dirX;
                const newDirY = srcCol + dirY;

                if (this.isValidPosition(newDirX, newDirY)) {
                    this.visited[newDirX][newDirY] = true;
                    this.nodes.push([newDirX, newDirY]);
                    this.path[newDirX][newDirY] = [srcRow, srcCol];
                }
            }
        }
        return null;
    }

    constructPath(destPos) {
        const path = [];
        let [row, col] = destPos;
        while (this.path[row][col] != null) {
            path.unshift([row, col]);
            [row, col] = this.path[row][col];
            this.pathLength++;
        }
        path.unshift(this.srcPos);
        this.pathLength++;
        return {path: path, pathLength: this.pathLength};
    }
}
