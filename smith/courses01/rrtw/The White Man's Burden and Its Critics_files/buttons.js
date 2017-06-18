var now ;
var rnd ;
var tmp ;
var the_number ;

function MakeArray()   {
    this.length = MakeArray.arguments.length;
    for (var i = 0; i < this.length; i++)
    this [i+1] = MakeArray.arguments[i]  }

function randomize(the_number)   {
    now = new Date();
    rnd = now.getSeconds() * now.getMinutes();
    tmp = Math.cos(rnd);
    if (tmp < 0) { tmp = 0 - tmp; }
    rnd = tmp * the_number;
    rnd = Math.round(rnd);
    if (rnd == 0) { rnd = 1; }   }

var Amzn1 = '<A HREF=\"http://www.amazon.com/exec/obidos/redirect-home/antiimperialiint\" TARGET=\"_top\"><IMG SRC=\"http://www.boondocksnet.com/icon/amzn_holiday120x60_2.gif\" WIDTH=120 HEIGHT=60 BORDER=0 ALT=\"Holiday Shopping at Amazon.com\"></A>';

var Amzn2 = '<A HREF=\"http://www.amazon.com/exec/obidos/redirect-home/antiimperialiint\" TARGET=\"_top\"><IMG SRC=\"http://www.boondocksnet.com/icon/amzn_holiday120x60_3.gif\" BORDER=\"0\" HEIGHT=\"60\" WIDTH=\"120\" alt=\"Holiday Shopping at Amazon.com\"></A>';

var Amzn3 = '<A HREF=\"http://www.amazon.com/exec/obidos/redirect-home/antiimperialiint\" TARGET=\"_top\"><IMG SRC=\"http://www.boondocksnet.com/icon/amzn_holiday120x60_4.gif\" BORDER=\"0\" HEIGHT=\"60\" WIDTH=\"120\" alt=\"Holiday Shopping at Amazon.com!\"></A>';

var Amzn4 = '<A HREF=\"http://www.amazon.com/exec/obidos/redirect-home/antiimperialiint\" TARGET=\"_top\"><IMG SRC=\"http://www.boondocksnet.com/icon/amzn_holiday120x90_1.gif\" BORDER=\"0\" HEIGHT=\"90\" WIDTH=\"120\" alt=\"Holiday Shopping at Amazon.com!\"></A>';

var Amzn5 = '<A HREF=\"http://www.amazon.com/exec/obidos/redirect-home/antiimperialiint\" TARGET=\"_top\"><IMG SRC=\"http://www.boondocksnet.com/icon/amzn_holiday120x90_3.gif\" BORDER=\"0\" HEIGHT=\"90\" WIDTH=\"120\" alt=\"Holiday Shopping at Amazon.com!\"></A>';

var DisplayTextArray = new MakeArray(Amzn1, Amzn2, Amzn3, Amzn4, Amzn5);

randomize(DisplayTextArray.length);

var Button = DisplayTextArray[rnd];

document.write(Button);
