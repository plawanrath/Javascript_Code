/**
 * Design Object Oriented class structure for a stop watch similar 
 * to the one that appears on a phone. It should include features for 
 * the stopwatch, pause, reset and laps.
 * 
 * Start - Start the stopwatch timer
 * Pause - Pause the stopwatch timer
 * Reset - Reset the stopwatch timer and laps
 * laps - Record the lap number and current time but continue timer
 */

class Stopwatch {
    constructor() {
        this.timer = 0;
        this.laps = [];
        this.active = false;
    }

    start() {
        this.active = true;
        while(!this.active) {
            this.timer++;
        }
    }

    pause() {
        this.active = false;
    }

    reset() {
        this.timer = 0;
        this.laps = [];
        this.active = false;
    }

    laps() {
        if(this.active) {
            this.laps.push(this.timer);
        }
    }
}
