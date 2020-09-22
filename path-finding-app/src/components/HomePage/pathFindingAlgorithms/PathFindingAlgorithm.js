class PathFindingAlgorithm{
    constructor(timeStepDelay){
        this.timeStepDelay = timeStepDelay;
    }

    async run(){
        throw new Error('You need to implement this method in the children components')
    }

    setTimeStepDelay(timeStepDelay){
        this.timeStepDelay = timeStepDelay;
    }
}

export default PathFindingAlgorithm;