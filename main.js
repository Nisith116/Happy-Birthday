$(document).ready(function(){


  $("#hangingBulb").hide()
  $(".playMusic").hide()
  $(".two").hide()
  $(".three").hide()
  $(".decorate").hide()
  $(".balloon").hide()
  $(".celebrate").hide()
  $(".cakeOne").hide()
  $(".name").hide()
  $(".lightCandle").hide()
  $(".wish").hide()
  $("#canvas").hide()
  $(".message").hide()
  $(".messageForU").hide()
  $(".turnOn").click(function(){
    $("#hangingBulb").show();
    $("body").removeClass("bgcolor")
    $('body').addClass('brightOne');
    $(".turnOn").hide()
    $(".board").hide()
    setTimeout(function(){
        $("body").removeClass("brightOne")
        $('body').addClass('brightTwo');
    }, 500);

    setTimeout(function(){
        $("body").removeClass("brightTwo")
        $('body').addClass('brightThree');
    }, 1500);
    setTimeout(function(){
        $("body").removeClass("brightThree")
        $('body').addClass('bright');
    }, 2550);
    setTimeout(function(){
      $(".playMusic").show()
    }, 2800);
    $('body').addClass('bright');
    setTimeout(function(){
      $(".two").show()
    }, 2800);
    setTimeout(function(){
      $(".playMusic").show()
    }, 3800);


  })

  $(".playMusic").click(function(){
    $(".playMusic").hide()
    $(".two").hide()
    setTimeout(function(){
      $(".three").show()
    }, 1500);

    setTimeout(function(){
      $(".decorate").show()
    }, 2000);

  })

  let mark = `<marquee class="mone" direction="right" loop="1" behavior="slide">HAPPY</marquee>
  <marquee class="mtwo" direction="left" loop="1" behavior="slide" >VALENTINE'S DAY</marquee>`



 $(".playMusic").click(function(){
   $("#audioContent")[0].play()

 })
 $(".decorate").click(function(){
   $(".two").hide()
   $(".three").hide()
   setTimeout(function(){
     $(".decorate").hide()
     $(".happy").html(mark)
   }, 1000);
   $(".balloon").show()
   setTimeout(function(){
     $(".name").show()
   }, 9000);
   $(".two").hide()
   $("#hangingBulb").hide()
   setTimeout(function(){
     $(".cakeOne").show()
   }, 9000);

 })
$(".cakeOne").click(function(){
      $(".two").hide()
      $("body").removeClass("bright")
      $('body').addClass('bgBright');
  $(".cakeOne").hide()
  $(".celebrate").show()
  $(".happy").hide()
  $(".name").hide()
  setTimeout(function(){
    $(".lightCandle").show()
  }, 2000);

})
let light = `<div class="flame"></div>
<div class="candle"></div>`
$(".lightCandle").click(function(){
  $( `<div class="flame"></div>
  <div class="candle"></div>` ).insertBefore( ".cherry1" );
  $(".two").hide()
  $(".wish").show()
  $("#canvas").show()
  $(".lightCandle").hide()
  setTimeout(function(){
    $(".message").show()
  }, 3000);
})

let msg = `<p>Today is...</p>,
<p>as beautiful as other days</p>,
<p>but you realize</p>,
<p>another year has gone</p>,
<p>in a blink of the eyes</p>,
<p><strong>however</strong></p>,
<p>Do you know..?</p>,
<p>today is just special</p>,
<p>so special to you</p>,
<p>that's why</p>,
<p>Let's make it...</p>,
<p>the best celebration ever</p>,
<p>and let me share...</p>,
<p>a piece of happiness to you</p>,
<p>I made all this...</p>,
<p>as a birthday present to you</p>,
<p>thanks for being there</p>,
<p>thanks for the moments we made</p>,
<p>thanks for everything</p>,
<p>I wish you all the best</p>,
<p>May your life be at ease</p>,
<p>May all your wishes come true</p>,
<p>Remember</p>,
<p>your ambitions</p>,
<p>you live as a free bird...</p>,
<p>flying in the blue sky</p>,
<p>Now things are different...</p>,
<p>real story of your life</p>,
<p>is just about to begin</p>,
<p>indeed..</p>,
<p>this life is not easy as we thought</p>,
<p>but...</p>,
<p>don't worry</p>,
<p>don't be afraid</p>,
<p>because...</p>,
<p>you are not alone in this world</p>,
<p>I am always there for U </p>,
<p>and....</p>,
<p>this year will be better</p>,
<p>and I hope</p>,
<p>you'll find...</p>,
<p>happiness along the way</p>,
<p>keep your spirits up</p>,
<p>enjoy every single moment...</p>,
<p>that you experience today</p>,
<p>fill it with your most beautiful smile</p>,
<p>and make it the best memory..</p>,
<p>lastly...</p>,
<p>I'd like to wish you one more time</p>,
<p>a very happy birthday LIZZA</p>,`

let msgSplit = msg.split(",")


$(".message").click(function(){
  $(".messageForU").show()
  $(".wish").hide()
  $(".message").hide()

  setTimeout(function(){
      $(".msgDiv").empty()
      $(".msgDiv").append(msgSplit[0])
}, 2000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[1])
}, 4000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[2])
}, 6000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[3])
}, 8000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[4])
}, 10000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[5])
}, 12000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[6])
}, 14000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[7])
}, 16000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[8])
}, 18000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[9])
}, 20000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[10])
}, 22000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[11])
}, 24000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[12])
}, 26000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[13])
}, 28000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[14])
}, 30000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[15])
}, 32000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[16])
}, 34000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[17])
}, 36000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[18])
}, 38000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[19])
}, 40000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[20])
}, 42000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[21])
}, 44000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[22])
}, 46000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[23])
}, 48000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[24])
}, 50000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[25])
}, 52000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[26])
}, 54000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[27])
}, 56000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[28])
}, 60000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[29])
}, 62000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[30])
}, 64000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[31])
}, 66000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[32])
}, 68000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[33])
}, 70000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[34])
}, 72000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[35])
}, 74000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[36])
}, 76000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[37])
}, 78000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[38])
}, 80000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[39])
}, 82000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[40])
}, 84000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[41])
}, 86000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[42])
}, 88000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[43])
}, 90000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[44])
}, 92000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[45])
}, 94000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[46])
}, 96000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[47])
}, 98000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[48])
}, 100000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[49])
}, 102000);

setTimeout(function(){
    $(".msgDiv").empty()
    $(".msgDiv").append(msgSplit[50])
}, 104000);




})

})
