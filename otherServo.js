//code that sets length of PWM pulses
basic.forever(function () {//runs continuously in a loop

    for (let i = 9; i <= 500; i += 10) {//increments i by ten
        pins.servoWritePin(AnalogPin.P1, 180);//sends a pulse
        basic.pause(500)//pauses so the user can see what is happening
        pins.servoSetPulse(AnalogPin.P1, i);//sets duration of pulse
        basic.pause(500);//pauses so user can see what is happening
    }
})
