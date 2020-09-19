class Cell{
    constructor(available, x, y, grid, updateVisitedCell){
        this.available = available;
        this.visited = false;
        this.startingNode = false;
        this.x = x;
        this.y = y;
        this.grid = grid;
        this.updateVisitedCell = updateVisitedCell;
        this.neighboursDirections = [  [0,-1], [1,0], [-1,0], [0,1], ];
        this.key = [x,y];
    }

    getNeighbours(){
        let neighbours = []
        for(let directions of this.neighboursDirections){
            let neighbourX = this.x + directions[0];
            let neighbourY = this.y + directions[1];
            if(this.grid.isValidPosition(neighbourX,neighbourY) && this.grid.isWalkableCell(this.grid.getCell(neighbourX,neighbourY))){
                neighbours.push(this.grid.getCell(neighbourX,neighbourY));
            }
        }
        return neighbours;
    }

    markAsVisited(){
        this.visited = true;
        this.updateVisitedCell(this, this.grid);
    }
}
export default Cell