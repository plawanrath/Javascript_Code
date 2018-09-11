/**
 * This is an idea of a simple parking lot with 3 types of spots 1 for car, 1 for bus and 
 * 1 for motorbikes.
 * Say for simplicity
 * Motorbike = 1, Car = 2, Bus = 3 (size)
 * 
 * Also assume we only want to write function to parkVehicle if spot avaibale for that type
 * and removeVehicle from the parking spot
 */
class Vehicle {
    constructor(license, color, size) {
        this.licensePlate = license;
        this.color = color;
        this.size = size
    }
}

class MotorBike extends Vehicle {
    constructor(license, color) {
        super(license, color, 1);
    }
}

class Car extends Vehicle {
    constructor(license, color) {
        super(license, color, 2);
    }
}

class Bus extends Vehicle {
    constructor(license, color) {
        super(license, color, 3);
    }
}

class ParkingLot {
    constructor(zipcode) {
        this.zipcode = zipcode;
        this.emptySpots = new Map(); //This is a map of empty parking spots by size
        //<Size, Stack of empty spots>
        this.spotMap = new Map(); //<ParkingSpot, Vehicle>
    }

    //So you get O(1) time of parking
    parkVehicle(v) {
        if(this.emptySpots[v.size].length == 0) {
            return -1; //no empty spot of that size
        }
        let spot = this.emptySpots[v.size].pop(); //get empty spot of that size
        this.spotMap[spot] = v;
        return spot;
    }

    //You get O(1) time for removing the vehicle
    removeVehicle(spot) {
        if(!this.spotMap[spot]) {
            return -1; //no vehicle in that spot
        } else {
            let vehicle = this.spotMap[spot];
            this.emptySpots[vehicle.size].push(spot);
            delete this.spotMap[spot];
            return vehicle;
        }
    }
}

class ParkingSpot extends ParkingLot {
    constructor(zipcode, id, size) {
        super(zipcode);
        this.id = id;
        this.size = size;
    }
}

