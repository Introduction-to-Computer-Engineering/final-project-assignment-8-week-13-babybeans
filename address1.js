
//code that writes to an internal address and an arbitrary address
basic.forever(function () {//runs continuously
    pins.i2cWriteNumber(0x19, 0, NumberFormat.Int8LE) // writes to internal address
    basic.pause(700);//pauses so we can see what is going on
    pins.i2cWriteNumber(0x33, 11, NumberFormat.Int8LE) //writes to an arbitrary address
    basic.pause(700)//pauses so we can see what is going on
}) 
