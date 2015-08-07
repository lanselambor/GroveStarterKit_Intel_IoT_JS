/* Grove - Starter Kit Plus Intel IoT Edition */

/*
Grove Sensor: Grove-Relay
    I/O Type: Digital output
   Connector: D6
Product wiki: http://www.seeedstudio.com/wiki/Grove_-_Relay
*/

var m = require('mraa'); //require mraa
console.log('MRAA Version: ' + m.getVersion()); //write the mraa version to the console

var relay = new m.Gpio(6); //setup digital read on pin 6
relay.dir(m.DIR_OUT); //set the gpio direction to output

//Keyboard input
//on: turn on relay
//off: turn off relay
process.stdin.setEncoding('utf8');
process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write('input: ' + chunk);
    if (chunk == 'on\n') {relay.write(1)}
    else if (chunk == 'off\n') {relay.write(0)}
    else {console.log("error input.")}
  }
});

process.stdin.on('end', function() {
  process.stdout.write('end');
});
