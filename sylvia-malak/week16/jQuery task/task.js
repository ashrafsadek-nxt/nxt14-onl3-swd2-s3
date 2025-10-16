(function($){
  $(function(){
    var $d = $('#animatedDiv');

    $('#fadeIn').on('click', ()=>{
      $d.animate({ opacity: 1 }, 400); 
    });

    $('#fadeOut').on('click', ()=>{
      $d.animate({ opacity: 0 }, 400); 
    });
  });
})(jQuery);
