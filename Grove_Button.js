/* Grove - Starter Kit Plus Intel IoT Edition*/

/*
Grove Sensor: Grove_Button
    I/O Type: Digital input
   Connector: D6
Product wiki: http://www.seeedstudio.com/wiki/Grove_-_Button  
*/   

var m = require('mraa'); //require mraa
console.log('MRAA Version: ' + m.getVersion()); //write the mraa version to the console

var button = new m.Gpio(6); //setup digital read on pin 6
button.dir(m.DIR_IN); //set the gpio direction to input

periodicActivity(); //call the periodicActivity function

function periodicActivity() //
{
    if(button.read() == 1){ //read the digital value of the pin
        console.log('Button down.');
        while (button.read() == 1);
    }

    setTimeout(periodicActivity,100); //call the indicated function every 100 milliseconds
}
