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


