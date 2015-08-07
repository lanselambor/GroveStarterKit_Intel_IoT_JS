/* Grove - Starter Kit Plus Intel IoT Edition */

/*
Grove Sensor: Grove-Touch Sensor
    I/O Type: Digital input
   Connector: A0
Product wiki: http://www.seeedstudio.com/wiki/Grove_-_Touch_Sensor
*/

var m = require('mraa'); //require mraa
console.log('MRAA Version: ' + m.getVersion()); //write the mraa version to the console

var touch = new m.Gpio(6); //setup digital read on pin 6
touch.dir(m.DIR_IN); //set the gpio direction to input

periodicActivity(); //call the periodicActivity function

function periodicActivity() //
{
  var status =  touch.read(); //read the digital value of the pin
  if(status == 1){
    console.log('Touched.'); 
  }
  setTimeout(periodicActivity,100); //call the indicated function every 100 milliseconds
}
