function moveUp(robot) {
    return robot.move();
}

function moveLeft(robot) {
    robot.moveLeft();
    let moved = robot.move();
    robot.moveRight();
    return moved;
}

function moveRight(robot) {
    robot.moveRight();
    let moved = robot.move();
    robot.moveLeft();
    return moved;
}

function moveDown(robot) {
    robot.moveRight();
    robot.moveRight();
    let moved = robot.move();
    robot.moveLeft();
    robot.moveLeft();
    return moved;
}

function cleanCells(robot, visited, x, y) {
    let id = x + ',' + y;
    if(visited[id] === true) {
	return;
    }
    robot.clean();
    visited[id] = true;
    if(moveUp(robot)) {
	cleanCells(robot, visited, x, y-1);
	moveDown(robot);
    }
    if(moveDown(robot)) {
	cleanCells(robot, visited, x, y+1);
	moveUp(robot);
    }
    if(moveLeft(robot)) {
	cleanCells(robot, visited, x-1, y);
	moveRight(robot);
    }
    if(moveRight(robot)) {
	cleanCells(robot, visited, x+1, y);
	moveLeft(robot);
    }
}

function cleanRoom(robot) {
    let visited = new Map(); //Need to use a map with a unique Id because we do not know 
                                //the layout of the room which means no grid size to work with. 
    
    cleanCells(robot, visited, 0, 0);
}
