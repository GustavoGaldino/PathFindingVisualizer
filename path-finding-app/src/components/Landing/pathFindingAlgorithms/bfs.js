function bfs(startingNode, goalNode){
    let frontier = new Array();
    frontier.push(startingNode);
    let reached = new Set();
    reached.add(startingNode);
    while(!(frontier.length == 0)){
        let currentNode = frontier.pop();
        if(currentNode === goalNode){
            console.log(goalNode)
            alert('Found the goal node')
        }
        let currentNodeNeighbours = currentNode.getNeighbours();
        for(let nextNode of currentNodeNeighbours){
            if(!reached.has(nextNode)){
                frontier.unshift(nextNode);
                reached.add(nextNode);
            }
        }
    }
}

export default bfs;