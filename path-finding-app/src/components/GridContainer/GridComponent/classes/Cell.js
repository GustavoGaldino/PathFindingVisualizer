class Cell{
    constructor(cellType, key, x, y, grid){
        this.cellType = cellType;
        this.key = key;
        this.x = x;
        this.y = y;
        this.neighboursDirections = new Array([0,1], [1,0], [0,-1], [-1,0])
        this.grid = grid
    }

    static isValidCell(x,y){
        return( x >= 0 && y >= 0 && x < this.rows && y < this.cols)
    }

    getNeighbours(){
        neighbours = new Array()
        for(directions of this.neighboursDirections){
            if(isValidCell(this.x + directions[0], this.y + directions[y]) && !this.grid.isWallCell(grid.)){
                neighbours.push()
            }
        }
    }
}

export default Cell;