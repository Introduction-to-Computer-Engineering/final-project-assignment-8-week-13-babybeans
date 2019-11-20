
basic.forever(function () {

    for (let i = 9; i <= 500; i += 10) {
        pins.servoWritePin(AnalogPin.P1, 180);
        basic.pause(500)
        pins.servoSetPulse(AnalogPin.P1, i);
        basic.pause(500);
    }
})
