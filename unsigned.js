
//writes to an internal address
basic.forever(function () {//runs continuously
    pins.i2cWriteNumber(0x1E, 2055, NumberFormat.UInt8LE)// writes to 0x1E
    basic.pause(100); //pause to so the user can see what is going on
}) 
