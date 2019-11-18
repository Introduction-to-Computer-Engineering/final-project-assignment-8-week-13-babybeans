//PWM function that increases by 5% each time the loop, then decreases by 5% each time.

basic.forever(function () {//runs continually
    for (let i = 9; i < 171; i += 9) {//increases the pulse with in increments of 5%
                                        

        basic.pause(100)//pause for the user to be able to see what is happening


        pins.servoWritePin(AnalogPin.P0, i)//increases the duty cycle as i increments
    }
    for (let i = 171; i > 9; i += -9) {//decreases the pulse with increments of 5% 

        basic.pause(100)//pause for the user to see what is happening

        pins.servoWritePin(AnalogPin.P0, i)//decreases the duty cycle as i decrements
    }

})
