/* Grove - Starter Kit Plus Intel IoT Edition */

/*
Grove Sensor: Grove-Rotary_Angle_Sensor
    I/O Type: Analog input
   Connector: A0
Product wiki: http://www.seeedstudio.com/wiki/Grove_-_Rotary_Angle_Sensor
*/

var m = require('mraa'); //require mraa
console.log('MRAA Version: ' + m.getVersion()); //write the mraa version to the console

periodActivity();

function periodActivity()
{
    var analogPin0 = new m.Aio(0); //setup access analog inpuput pin 0
    var analogValue = analogPin0.read(); //read the value of the analog pin
    console.log(analogValue); //write the value of the analog pin to the console
    
    setTimeout(periodActivity, 500);
}
