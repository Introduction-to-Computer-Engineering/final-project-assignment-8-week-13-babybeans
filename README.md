# README

This video shows the configured the OUT of the built-in function generator on the workstation connected to the oscilloscope.
https://imgur.com/gallery/mOg0nlE
Write up!


function generator: 
https://imgur.com/gallery/nSErFpw

Pwm pulse: 
https://imgur.com/gallery/5a2Psok


pwm pulse with loop by fives!! :no

### I2C warmup:

a)  UART is between only 2 devices that have to have the same data rate. If more than one device is connected to the same port bus contention can be a problem. It also usually requires extra hardware. SPI requires a lot of pins and can become excessive. Routing signals also become more difficult in a tight PCB layout. I2C can support more than one master, requires only two wires, and supports up to 1008 slave devices. 

b)SDA is the data signal and SCL is the clock signal. 

c) Masters drives the clock and initiates the transfer over the I2C bus. Slaves can transfer data, but cannot initiate transfer.

d)The address frame is the first process in the communication sequence. Once the first eight bits if the data is trasmitted to the recieving device, the device should pull SDA line low. The data frame is when the master generates a continuous clock signal, and the SDA is either placed on the master or slave depending on if the program call for read or write.

e)The appropriate trigger for capturing an I2C frame on the oscilloscope is the default setting on the oscilloscope.
f)


This video shows reading the  i2c addresses: 
https://imgur.com/gallery/eJhi0K5
### writeup
a)We captured the data frame.
b)The function does nothing


This video shows reading the I2C address with signed and unsigned: 
https://imgur.com/gallery/eJhi0K5

this pic shows what happens when the microbit is moved: 
https://imgur.com/gallery/NJsyGC7

write up

led matrix: no

