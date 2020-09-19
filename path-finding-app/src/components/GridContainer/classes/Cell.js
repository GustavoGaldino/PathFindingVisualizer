class Cell{
    constructor(available, visited, x, y, grid){
        this.available = available;
        this.visited = visited;
        this.x = x;
        this.y = y;
        this.parentGrid = grid;
        this.neighboursDirections = [ [0,1], [1,0], [0,-1], [-1,0] ];
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
}
export default Cell