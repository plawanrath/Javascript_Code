class Car {
    constructor(position, speed) {
        this.position = position;
        this.speed = speed;
        this.time = null;
    }
}

function carFleet(target, position, speed) {
    let cars = [];
    for(let i=0;i<position.length;i++) {
        let c = new Car(position[i], speed[i]);
        let time = (target - position[i]) / speed[i];
        c.time = time;
        cars.push(c);
    }
    cars.sort(function(a, b) {return a.position - b.position});
    let fleet = 1;
    for(let i=cars.length-1;i>0;i--) {
        if(cars[i].time < cars[i-1].time) {
            fleet++;
        }
    }
    return fleet;
}

target = 10, position = [0, 4, 2], speed = [2, 1, 3]
console.log(carFleet(target, position, speed));