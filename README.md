# README
### 2. Visualize Simple Coninuous signals

#### i
   a) This video shows the configured the OUT of the built-in function generator on the workstation connected to the    oscilloscope.
   https://imgur.com/gallery/mOg0nlE
   Write up!

   b ) function generator: 
   https://imgur.com/gallery/nSErFpw

   c) Pwm pulse: 
   https://imgur.com/gallery/5a2Psok

   d) pwm pulse with loop by fives!! :no

#### ii 
   Need other servo  function

### 3. I2C warmup:
#### ii
   a)  UART is between only 2 devices that have to have the same data rate. If more than one device is connected to the same port bus contention can be a problem. It also usually requires extra hardware. SPI requires a lot of pins and can become excessive. Routing signals also become more difficult in a tight PCB layout. I2C can support more than one master, requires only two wires, and supports up to 1008 slave devices. 

   b)SDA is the data signal and SCL is the clock signal. 

   c) Masters drives the clock and initiates the transfer over the I2C bus. Slaves can transfer data, but cannot initiate transfer.

   d)The address frame is the first process in the communication sequence. Once the first eight bits if the data is trasmitted to the recieving device, the device should pull SDA line low. The data frame is when the master generates a continuous clock signal, and the SDA is either placed on the master or slave depending on if the program call for read or write.

   e)The appropriate trigger for capturing an I2C frame on the oscilloscope is the falling edge of the SDA. The reason for this is WHAT?

   f)Both microbits are configured to be masters by default. Unless the programmer wants to go deep into the operating system, having 2 masters will not work.


This video shows reading the  i2c addresses: 
https://imgur.com/gallery/eJhi0K5

### 4. First steps with I2C
#### i
   a)We captured the data frame and the address frame.
   b)The I2C write function still has the master try to initiate a transaction to the slave, but after the slave doesn't respond the master realizes that there is nothing to transmit to.

#### ii
   a) There are three addresses because sometimes mulitple devices write to the same address, therefore it is possible to change the address to allow a device to still write, but there is not the confusion from devices writing to the same address.

   b) This pic shows reading the I2C address with unsigned: 
https://imgur.com/gallery/0gBqtHB  

   c) scroll values pic (.09s & .22s)

   d) when reading the accelerometer, we read -128. when reading the magnetometer, we get a lot of different numbers. 

   e) 1. this pic shows what happens when the microbit is moved when reading the accelerometer: 
      2. this is what happened when we read the magnometer. 
   
   https://imgur.com/gallery/NJsyGC7   (not sure if i need this video)

