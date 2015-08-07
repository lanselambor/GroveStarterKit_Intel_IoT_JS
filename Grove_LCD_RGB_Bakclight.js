/* Grove - Starter Kit Plus Intel IoT Edition */

/*
Grove Sensor: Grove-LCD RGB Bakclight
    I/O Type: I2C device
   Connector: A0
Product wiki: http://www.seeedstudio.com/wiki/Grove_-_LCD_RGB_Backlight
*/

var m = require('mraa'); //require mraa

var DISPLAY_RGB_ADDR = 0x62;
var DISPLAY_TEXT_ADDR = 0x3e;

// helper function to go from hex val to dec
function char(x) { return parseInt(x, 16); }

lcd_rgb = new m.I2c(0)
lcd_text = new m.I2c(0)

lcd_rgb.address(DISPLAY_RGB_ADDR)
lcd_text.address(DISPLAY_TEXT_ADDR)

function setRGB(r, g, b){
    lcd_rgb.writeReg(0, 0);
    lcd_rgb.writeReg(1, 0);

    lcd_rgb.writeReg(char('0x08'), char('0xAA'));
    lcd_rgb.writeReg(char('0x04'), r);
    lcd_rgb.writeReg(char('0x03'), g);
    lcd_rgb.writeReg(char('0x02'), b);
}

setRGB(0,0,255);

function textCommand(cmd){
    lcd_text.writeReg(char('0x80'), cmd)
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

//Write text and display on lcd 
//Fresh full screen every time
function setText(text){
    textCommand(char('0x01')); //clear display     
    sleep(40);
    textCommand(char('0x0C')); //displayon, no cursor    
    textCommand(char('0x28')); //2 lines    
    sleep(40);
    var count = 0;
    var row = 0;
    for (i = 0; i < text.length; i++){
        if ((text[i] == '\n') || (count == 16)){
            count = 0;
            row += 1;
            if (row == 2) {break;}
            textCommand(char('0xC0'));
            if (text[i] == '\n') {continue;}
        }
        count += 1;
        lcd_text.writeReg(char('0x40'), text[i].charCodeAt(0));
    }   
}

setText('Grove-LCD RBG Backlight Js');

//Changing backlight color in loop
function colorWheel(){
    setInterval(function() {
        for (c = 0; c <= 255; c += 5) {
            setRGB(0,c,255-c);
            sleep(50);
        }
        for (c = 0; c <= 255; c += 5) {
            setRGB(c,255-c,0);
            sleep(50);
        }
        for (c = 0; c <= 255; c += 5) {
            setRGB(255-c,0,c);
            sleep(50);
        }
    }, 50);
}
colorWheel();
