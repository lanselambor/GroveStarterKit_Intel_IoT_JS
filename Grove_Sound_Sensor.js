/* Grove - Starter Kit Plus Intel IoT Edition */

/*
Grove Sensor: Grove-Sound_Sensor
    I/O Type: Analog input
   Connector: A0
Product wiki: http://www.seeedstudio.com/wiki/Grove_-_Sound_Sensor
*/

var m = require('mraa'); //require mraa
console.log('MRAA Version: ' + m.getVersion()); //write the mraa version to the console
var analogPin = new m.Aio(0); //setup access analog inpuput pin 

periodActivity();

function periodActivity()
{
    var analogValue = analogPin.read(); //read the value of the analog pin
    console.log(analogValue); //write the value of the analog pin to the console
    
    setTimeout(periodActivity,500);
}
