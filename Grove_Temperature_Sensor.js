/* Grove - Starter Kit Plus Intel IoT Edition */

/*
Grove Sensor: Grove-Temperature_Sensor
    I/O Type: Analog input
   Connector: A0
Product wiki: http://www.seeedstudio.com/wiki/Grove_-_Temperature_Sensor
*/


var B = 3975;
var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console

//GROVE Kit A0 Connector --> Aio(0)
var myAnalogPin = new mraa.Aio(0);

periodActivity();

function periodActivity()
{
    var a = myAnalogPin.read();
    var resistance = (1023 - a) * 10000 / a; //get the resistance of the sensor;
    console.log("Resistance: "+resistance);
    var celsius_temperature = 1 / (Math.log(resistance / 10000) / B + 1 / 298.15) - 273.15;//convert to temperature via datasheet ;
    console.log("Celsius Temperature "+celsius_temperature); 
    var fahrenheit_temperature = (celsius_temperature * (9 / 5)) + 32;
    console.log("Fahrenheit Temperature: " + fahrenheit_temperature); 
    setTimeout(periodActivity, 1000);
}
