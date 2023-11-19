function loadDraw(){
  $("#content").load('emblemdraw.html');
  $(document).ready(function() {
    $.getScript('emblemdraw.js');
  });
}
