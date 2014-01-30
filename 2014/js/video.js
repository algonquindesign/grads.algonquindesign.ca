var $dialog = $('#video');
var $placeholder = $('#video-placeholder');

 dialogPolyfill.registerDialog($dialog.get(0));

$('#btn-open-video').on('click', function(){
  $placeholder.html('<iframe src="http://player.vimeo.com/video/84420476?color=c9ff23&amp;autoplay=1" width="240" height="135" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');

  /*.get() returns native javascript for us to access when also using jquery
  (there is both a show for jquery and javascript with different functions)*/

  $dialog.get(0).showModal();
  //show() --> allows multiple dialogs
  //showModal() --> Single dialog, with no user interaction behind
});

$('#close-btn-video').on('click', function(){
  $dialog.get(0).close();
  $placeholder.html('');
});
