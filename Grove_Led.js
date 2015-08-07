/* Grove - Starter Kit Plus Intel IoT Edition */

/*
Grove Sensor: Grove-Led
    I/O Type: Digital output
   Connector: D6
Product wiki: http://www.seeedstudio.com/wiki/Grove_-_LED
*/

var m = require('mraa'); //require mraa
console.log('MRAA Version: ' + m.getVersion()); //write the mraa version to the console

var buzzer = new m.Gpio(6); //setup digital read on pin 6
buzzer.dir(m.DIR_OUT); //set the gpio direction to output
var state = true;

periodicActivity(); //call the periodicActivity function

function periodicActivity() //
{
  buzzer.write(state?1:0);
  state = !state;
  setTimeout(periodicActivity,500); //call the indicated function every 100 milliseconds
}
