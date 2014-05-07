var BigSlide = {
        nbSlide : 0,
        nbCurrent: 1,
        elemCurrent:null,
        elem: null,
        timer:null,
     init:function(elem){
     this.nbSlide = elem.find(".slide").length; 
     // Creer La Pagination
     elem.append('<div class="navigation"></div>');
      for(var i=1;i <=this.nbSlide;i++){
          elem.find('.navigation .center').append("<a class='nav' href='#'></a>");
      }
      elem.find('.navigation .center .nav').click(function(){ BigSlide.gotoSlide($(this).text()); })
          //Intialitation du System
      this.elem =elem ;
      elem.find('.slide').hide();
      elem.find('.slide:first').show();
      this.elemCurrent = elem.find('.slide:first');
      this.elem.find('.navigation .center .nav:first').addClass('active');
      // On Cré Le Timer
    BigSlide.play();
   
    },

gotoSlide : function(num){
    if(num == this.nbCurrent){ return false}
    this.elemCurrent.fadeOut();
    this.elem.find("#slide"+num).fadeIn();
    this.elem.find('.navigation .nav').removeClass('active');
    this.elem.find('.navigation .nav:eq('+(num-1)+')').addClass('active');
    this.nbCurrent = num;
    this.elemCurrent = this.elem.find("#slide"+num);
   
    
    
},
next : function(){
   var num =  this.nbCurrent+1;
    if(num > this.nbSlide){
       num= 1;
        
    }
this.gotoSlide(num);
},
prev : function(){
   var num =  this.nbCurrent-1;
    if(num < 1){
    num =  this.nbSlide;
        
    }
    this.gotoSlide(num);
},
play : function(){
    window.clearInterval(BigSlide.timer);
    this.timer  = window.setInterval('BigSlide.next()',8000);
},
stop : function(){
    window.clearInterval(BigSlide.timer);
    
}

}
$(function(){
   BigSlide.init($("#slider"));
  
});





$(function(){
  // vars for testimonials carousel
  var $txtcarousel = $('#testimonial-list');
  var txtcount = $txtcarousel.children().length;
  var wrapwidth = (txtcount * 415) + 415; // 400px width for each testimonial item
  $txtcarousel.css('width',wrapwidth);
  var animtime = 750; // milliseconds for clients carousel
 
  // prev & next btns for testimonials
  $('#prv-testimonial').on('click', function(){
    var $last = $('#testimonial-list li:last');
    $last.remove().css({ 'margin-left': '-415px' });
    $('#testimonial-list li:first').before($last);
    $last.animate({ 'margin-left': '0px' }, animtime); 
  });
  
  $('#nxt-testimonial').on('click', function(){
    var $first = $('#testimonial-list li:first');
    $first.animate({ 'margin-left': '-415px' }, animtime, function() {
      $first.remove().css({ 'margin-left': '0px' });
      $('#testimonial-list li:last').after($first);
    });  
  });


  // vars for clients list carousel
  // http://stackoverflow.com/questions/6759494/jquery-function-definition-in-a-carousel-script
  var $clientcarousel = $('#clients-list');
  var clients = $clientcarousel.children().length;
  var clientwidth = (clients * 140); // 140px width for each client item 
  $clientcarousel.css('width',clientwidth);
  
  var rotating = true;
  var clientspeed = 1800;
  var seeclients = setInterval(rotateClients, clientspeed);
  
  $(document).on({
    mouseenter: function(){
      rotating = false; // turn off rotation when hovering
    },
    mouseleave: function(){
      rotating = true;
    }
  }, '#clients');
  
  function rotateClients() {
    if(rotating != false) {
      var $first = $('#clients-list li:first');
      $first.animate({ 'margin-left': '-140px' }, 600, function() {
        $first.remove().css({ 'margin-left': '0px' });
        $('#clients-list li:last').after($first);
      });
    }
  }
});
