$(function(){
  $('.white1').fadeIn(4000);
  $('.white2').fadeIn(4000);
  $('.center').fadeIn(2000);
  $('.center11').fadeIn(2000);


      setTimeout('rect()'); //アニメーションを実行







  $('.soturon-img1').hover (
    function(){
      $('.soturon-img1').addClass('image1');
      $('.image1').fadeIn();
      $('.midasi1').fadeIn();
      $('.midasi1-border').fadeIn();
    },
    function(){
      $('.soturon-img1').removeClass('image1');
      $('.image1').fadeOut();
      $('.midasi1').fadeOut();
      $('.midasi1-border').fadeOut();
    }
  );

  $('.soturon-img2').hover (
    function(){
      $('.soturon-img2').addClass('image2');
      $('.image2').fadeIn();
      $('.midasi2').fadeIn();
      $('.midasi2-border').fadeIn();
    },
    function(){
      $('.soturon-img2').removeClass('image2');
      $('.image2').fadeOut();
      $('.midasi2').fadeOut();
      $('.midasi2-border').fadeOut();
    }
  );

  $('.soturon-img3').hover (
    function(){
      $('.soturon-img3').addClass('image3');
      $('.image3').fadeIn();
      $('.midasi3').fadeIn();
      $('.midasi3-border').fadeIn();
    },
    function(){
      $('.soturon-img3').removeClass('image3');
      $('.image3').fadeOut();
      $('.midasi3').fadeOut();
      $('.midasi3-border').fadeOut();
    }
  );

  $('.soturon-img4').hover (
    function(){
      $('.soturon-img4').addClass('image4');
      $('.image4').fadeIn();
      $('.midasi4').fadeIn();
      $('.midasi4-border').fadeIn();
    },
    function(){
      $('.soturon-img4').removeClass('image4');
      $('.image4').fadeOut();
      $('.midasi4').fadeOut();
      $('.midasi4-border').fadeOut();
    }
  );

// クラスがあれば消し、なければ追加する
  // $('#toggle').click(function() {
  //    $(this).toggleClass('active');
  //    $('#overlay').toggleClass('open');
  //   });

  function resizeNav() {
    // Set the nav height to fill the window
    $("#nav-fullscreen").css({"height": window.innerHeight});

    // Set the circle radius to the length of the window diagonal,
    // this way we're only making the circle as big as it needs to be.
    var radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
    var diameter = radius * 2;
    $("#nav-overlay").width(diameter);
    $("#nav-overlay").height(diameter);
    $("#nav-overlay").css({"margin-top": -radius, "margin-left": -radius});
}

// Set up click and window resize callbacks, then init the nav.
// $(document).ready(function() {
    $("#nav-toggle").click(function() {
        $("#nav-toggle, #nav-overlay, #nav-fullscreen").toggleClass("open");
        $('body').toggleClass('bodyy');
    });

    $(window).resize(resizeNav);

    resizeNav();

	// window.setTimeout(function() {
	// 	 $("#nav-toggle").click();
	// }, 1000)
// });



});

function rect() {
    $('#rect').animate({
        marginTop: '-=50px'
    }, 4000).animate({
        marginTop: '+=50px'
    }, 4000);
    setTimeout('rect()', 8000); //アニメーションを繰り返す間隔
}
