class Cell{
    constructor(available, visited, x, y, grid){
        this.available = available;
        this.visited = visited;
        this.x = x;
        this.y = y;
        this.parentGrid = grid;
        this.neighboursDirections = [ [0,1], [1,0], [0,-1], [-1,0] ];
        this.key = {x,y};
    }

    getNeighbours(){
        let neighbours = []
        for(let directions of this.neighboursDirections){

        }
    }
}
export default Cell