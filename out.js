//code that is configured to the OUT of the built-in function generator

basic.forever(function(){ //runs in a continous loop
    pins.digitalWritePin(DigitalPin.P1, 1);//writes one to digital pin 1
    basic.pause(100);//pauses so the user can see what is happening
}) 
