import Cell from './Cell'

class Grid{
    constructor(rows, cols, updateVisitedCell){
        this.rows = rows;
        this.cols = cols;
        this.updateVisitedCell = updateVisitedCell;
        this.gridTable = ( () => {
            let gridTable = new Array(this.rows);
            for(let i = 0 ; i < this.rows ; i++){
                gridTable[i] = new Array(this.cols);
                for(let j = 0 ;  j < this.cols ; j++){
                    gridTable[i][j] = new Cell(true, i, j, this, this.updateVisitedCell);
                }
            }
            return gridTable;
        })();
    }

    getCell(x,y){
        if(this.isValidPosition(x,y)){
            return this.gridTable[x][y];
        }
        else{
            throw new Error('Not valid position');
        }
    }

    isValidPosition(x,y){
        return( x >= 0 && y >= 0 && x < this.rows && y < this.cols);
    }

    isWalkableCell(cell){
        return ( !(cell.cellType === "WALL") );
    }

}

export default Grid;