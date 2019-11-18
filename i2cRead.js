basic.forever(function () {//repeats continually
    let value = pins.i2cReadNumber(0x1E, NumberFormat.Int8LE, false)// puts the number read into the value variable.
    basic.showNumber(value)// shows value on 5x5 led matrix
    basic.pause(100)// allows user to see what is going on
    
}) 
