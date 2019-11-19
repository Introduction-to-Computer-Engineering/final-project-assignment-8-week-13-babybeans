# CPE 1040 - Fall 2019 - Assignment 8
Submission

### Task 1: Visualize output of built-in function generator

a) The first video shows the configured the OUT of the built-in function generator on the workstation connected to the oscilloscope. 

b ) The second video is of the oscilloscope attached to the function generator.

c) The third video is the video that shows the one line of code that sends a PWM pulse.

d) The fourth video is a video of that shows a program that sends PWM pusles with the period of the base wave increasing by 5% every time. 

##### Files:

Out of the built-in generator: [link](out.js)

Code for emitting a pulse: [link](oneLine.js)

Code for emitting a pulse wrapped ina for loop to increment it from 5% duty cycle to 95% : [link](pwm.js)

##### Demos:

 a)https://imgur.com/gallery/mOg0nlE
 
 b)https://imgur.com/gallery/nSErFpw
 
 c)https://imgur.com/gallery/5a2Psok
 
 d)https://imgur.com/gallery/1wxIQhl
 
### Task 6: Answer the following questions
###### What are the disadvantages of the other two serial communication channels, UART and SPI, and how does I2C improve on them?

UART is between only 2 devices that have to have the same data rate. If more than one device is connected to the same port bus contention can be a problem. It also usually requires extra hardware. SPI requires a lot of pins and can become excessive. Routing signals also become more difficult in a tight PCB layout. I2C can support more than one master, requires only two wires, and supports up to 1008 slave devices.

###### I2C is a two-wire serial communication channel. What are the two wires, SDA and SCL?

SDA is the data signal, which is the information that is being transmitted. The SCL is the clock signal that acts as a sort of timer for the exchange of data. The clock signal is generated by the master.

###### What distinguishes the master and the slaves?

Masters drives the clock and initiates the transfer over the I2C bus. Slaves can transfer data, but cannot initiate transfer. Slaves can also delay the clock by clock stretching to delay the transmission of data.

###### How are the two types of protocol frames different?

The address frame is the first process in the communication sequence. Once the first eight bits if the data is trasmitted to the recieving device, the device should pull SDA line low. The data frame is when the master generates a continuous clock signal, and the SDA is either placed on the master or slave depending on if the program call for read or write.

###### What is the most appropriate trigger for capturing an I2C frame on the oscilloscope?

The appropriate trigger for capturing an I2C frame on the oscilloscope is the falling edge of the SDA. The reason for this is that process is started off by the address frame, which pulls the SDA low. This means that the SDA will lead with a falling edge. The data frame has not yet been started at the point of the address frame, so the SCL will start after the SDA.

###### (Advanced) If the micro:bit is configured by default as a master, and two micro:bits, connected to each other via the SDA and SCL lines, communicate over I2C? (Bonus for a convincing argument, one way or another.)

Both microbits are configured to be masters by default. Unless the programmer wants to go deep into the operating system, having 2 masters will not work. Two of the reasons for this is that there would be two masters trying to initiate transmission of data and two clocks that would not be in sync.

### Task 7: Capture an I2C frame from the micro:bit 

###### What frame did you capture?

This test captured the address frame. The address frame can be identified by the first falling edge of the SDA signal. The data frame is when the clock has been started and is running, and since there was not an acknowledgement by the slave, there was no data frame.

###### What does the I2C write function do when there is nothing connected?

The I2C write function still has the master try to initiate a transaction to the slave, but after the slave doesn't respond the master realizes that there is nothing to transmit to. The person running this experiment would see nothing, but the master still would try to initiate a transaction and after not receiving a confirming message from the slave, the master would halt transmission.

###### Is there a difference in what you capture if you write a number to one of the internal device addresses?

There is a difference between the addresses because when one writes to the internal address, there is a response from the slave and the slave, resulting in an address frame and a data frame. When writing to an arbitrary address, there is only a data frame because there is no response from the slave.
Using the micro:bit function pins.i2cWriteNumber, 

##### File: 

Link to the code for writing to an arbitrary address:[link](arbitraryAddress.js)

Link to the code for writing to an internal address:[link](internalAddress.js)

Link to the code for writing a signed number to an internal address:[link](internalAddress.js)

Link to the code for writing to an unsigned number to an internal address:[link](internalAddress.js)

Link to the code that reads from the  magnetometer:[link](internalAddress.js)

Link to the code that reads from the accelerometer:[link](accelerometer.js)


##### Images

Image of writing to an arbitrary address: [link](https://github.com/Introduction-to-Computer-Engineering/final-project-assignment-8-week-13-babybeans/blob/master/images/arbitraryAddress.jpg)

Image of writing to an internal address: [link](https://github.com/Introduction-to-Computer-Engineering/final-project-assignment-8-week-13-babybeans/blob/master/images/internal.jpg)

Image of signed number written to an internal address: [link](https://github.com/Introduction-to-Computer-Engineering/final-project-assignment-8-week-13-babybeans/blob/master/images/signed.jpg)

Image of unsigned number written to internal adress: [link](https://github.com/Introduction-to-Computer-Engineering/final-project-assignment-8-week-13-babybeans/blob/master/images/unsigned.jpg)

Image of setup: [link](https://github.com/Introduction-to-Computer-Engineering/final-project-assignment-8-week-13-babybeans/blob/master/images/setup.jpg)

Video of reading from the magnometer: https://imgur.com/gallery/STNIS40

Video of reading from the Accelerometer: https://imgur.com/gallery/NHZxBIj

##### Explanation: 
###### What frame did you capture?

This test captured the address frame. The address frame can be identified by the first falling edge of the SDA signal. The data frame is when the clock has been started and is running, and since there was not an acknowledgement by the slave, there was no data frame.
###### What does the I2C write function do when there is nothing connected?

The I2C write function still has the master try to initiate a transaction to the slave, but after the slave doesn't respond the master realizes that there is nothing to transmit to. The person running this experiment would see nothing, but the master still would try to initiate a transaction and after not receiving a confirming message from the slave, the master would halt transmission.
###### Is there a difference in what you capture if you write a number to one of the internal device addresses?

There is a difference between the addresses because when one writes to the internal address, there is a response from the slave and the slave, resulting in an address frame and a data frame. When writing to an arbitrary address, there is only a data frame because there is no response from the slave.

###### Try all three addresses. (Bonus for a cogent argument about why there are three.

There are three addresses because sometimes mulitple devices cannot write to the same address, therefore it is possible to change the address to allow a device to still write, but there is not the confusion from devices writing to the same address. Each device must have it's own address.

###### Try signed and unsigned single bype integers.

1. This picture shows reading the I2C address with unsigned numbers: https://imgur.com/gallery/0gBqtHB
2. This picture shows reading the I2C address with signed numbers: https://imgur.com/gallery/jACnoeq
###### Scroll the values on the LED matrix.

1. Here is the video that was taken when reading the accelerometer address and showing the numbers on the led display: https://imgur.com/gallery/NHZxBIj
2. Here is the video taken when reading the magnetometer address and showing the readings on the led display: https://imgur.com/gallery/STNIS40
######  What values do you read?

When reading the accelerometer, it read -128. When reading the magnetometer, it displayed a lot of different numbers that constantly changed.
###### Can you get different values by moving the micro:bit around.

When reading from the accelerometer, the value of -128 did not change when the microbit was moved. However, when reading from the magnetometer, moving the microbit did change. This makes sense because the magnetometer is what we would use to make a compass. It reacts to changes in magnetic feilds. As this project took place in the lab, there were plenty of magnetic feilds for it to pick up on.

