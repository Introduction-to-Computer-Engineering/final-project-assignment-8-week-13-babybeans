
//writes to an arbitrary address
basic.forever(function () {//runs continuously
    pins.i2cWriteNumber(0x1E, 2055, NumberFormat.Int8LE) // writes to internal address
}) 
