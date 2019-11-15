# README
   ### 2. Visualize Simple Coninuous signals

#### Part i
   a) This video shows the configured the OUT of the built-in function generator on the workstation connected to the    oscilloscope. https://imgur.com/gallery/mOg0nlE
   
   b ) Here is the video of the oscilloscope attached to the function generator: https://imgur.com/gallery/nSErFpw
   
   c) Here is the video that shows the one line of code that sends a PWM pulse: https://imgur.com/gallery/5a2Psok

   d) Here is a video of that shows a program that sends PWM pusles with the period of the base wave increasing by 5% every time.     https://imgur.com/gallery/1wxIQhl
#### Part ii 
 #### ! Need other servo function

   ### 3. I2C warmup:
#### Part ii
   a)  UART is between only 2 devices that have to have the same data rate. If more than one device is connected to the same port bus contention can be a problem. It also usually requires extra hardware. SPI requires a lot of pins and can become excessive. Routing signals also become more difficult in a tight PCB layout. I2C can support more than one master, requires only two wires, and supports up to 1008 slave devices. 

   b) SDA is the data signal, which is the information that is being transmitted. The SCL is the clock signal that acts as a sort of timer for the exchange of data. The clock signal is generated by the master.

   c) Masters drives the clock and initiates the transfer over the I2C bus. Slaves can transfer data, but cannot initiate transfer. Slaves can also delay the clock by clock stretching to delay the transmission of data.

   d) The address frame is the first process in the communication sequence. Once the first eight bits if the data is trasmitted to the recieving device, the device should pull SDA line low. The data frame is when the master generates a continuous clock signal, and the SDA is either placed on the master or slave depending on if the program call for read or write.

  e) The appropriate trigger for capturing an I2C frame on the oscilloscope is the falling edge of the SDA. The reason for this is that process is started off by the address frame, which pulls the SDA low. This means that the SDA will lead with a falling edge. The data frame has not yet been started at the point of the address frame, so the SCL will start after the SDA.

  f) Both microbits are configured to be masters by default. Unless the programmer wants to go deep into the operating system, having 2 masters will not work. Two of the reasons for this is that there would be two masters trying to initiate transmission of data and two clocks that would not be in sync.


   ### 4. First steps with I2C
#### Part i
  Here is a picture of the oscilloscope when writing to an arbitrary address: https://imgur.com/gallery/uaahULD 
  Here is a picture of the setup of the microbit for this test: https://imgur.com/gallery/NMENXZE
  
  
  a) This test captured the data frame and the address frame. The address frame can be identified by the first falling edge of the SDA signal. The data frame is when the clock has been started and is running.
 
 b) The I2C write function still has the master try to initiate a transaction to the slave, but after the slave doesn't respond the master realizes that there is nothing to transmit to. The person running this experiment would see nothing, but the master still would try to initiate a transaction and after not receiving a confirming message from the slave, the master would halt transmission.
 
 #### c) Is there a difference between the adresses?

#### Part ii
   a) There are three addresses because sometimes mulitple devices cannot write to the same address, therefore it is possible to change the address to allow a device to still write, but there is not the confusion from devices writing to the same address. Each device must have it's own address.

   b) 1. This picture shows reading the I2C address with unsigned numbers:   https://imgur.com/gallery/0gBqtHB      
      2. This picture shows reading the I2C address with signed numbers:   https://imgur.com/gallery/jACnoeq      

   c) 1. Here is the video that was taken when reading the accelerometer address and showing the numbers on the led display: https://imgur.com/gallery/NHZxBIj       
      2. Here is the video taken when reading the magnetometer address and showing the readings on the led display: https://imgur.com/gallery/STNIS40
      
   d) When reading the accelerometer, it read -128. when reading the magnetometer, it displayed a lot of different numbers that constantly change. 

   e) When reading from the accelerometer, the value of -128 did not change when the microbit was moved. However, when reading from the magnetometer, moving the microbit did change. This makes sense because the magnetometer is what we would use to make a compass. It reacts to changes in magnetic feilds. As this project took place in the lab, there were plenty of magnetic feilds for it to pick up on.
   

