import Cell from './Cell'

class Grid{
    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;
        this.gridTable = this.initializeGridTable()
    }

    initializeGridTable(){
        let gridTable = new Array(this.rows);
        for(let i = 0 ;  i < this.rows ; i++){
            gridTable[i] = new Array(this.cols);
            for(let j = 0 ;  j < this.cols ; j++){
                let cellKey = i*this.cols + j;
                gridTable[i][j] = new Cell("a", cellKey, i, j)
            }
        }
        console.log(gridTable)
        return gridTable;
    }

    getCell(x,y){
        if(this.isWallCell(x,y)){
            return this.gridTable[x][y];
        }
        else{
            throw new Error('Invalid Cell')
        }
    }

    static isWallCell(cell){
        if(cell.cellType == "WALL"){
            return true;
        }
        else{
            return false;
        }
    }
}

export default Grid;

