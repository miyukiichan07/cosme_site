function heart_animation() {
      let $icon = document.getElementById('heart_icon');
      let $liked = document.getElementById('liked');
      $icon.classList.toggle( "press");
      $liked.classList.toggle( "press" );
      if ($icon.classList('press')) {
      $icon.classList.remove('press');
      $liked.classList.remove( "press", 1000 );

      }
  };

// $(function() {
// $( "i" ).click(function() {
//     $( "i,heart_span" ).toggleClass( "press", 1000 );
// });
// });
// document.getElementById('heart').addEventListener('click', function(){
//     this.classList.toggleClass('press', 1000);
// })