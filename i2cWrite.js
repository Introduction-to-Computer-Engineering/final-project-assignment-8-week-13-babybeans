//code that allows the coder to write to the specified address.

basic.forever(function () {//repeats continually 

    pins.i2cWriteNumber(0x1E, 1, NumberFormat.UInt8LE)// writes a 1 to address 0x1E.
    basic.pause(100)//pause to let the user see what is going on

})
