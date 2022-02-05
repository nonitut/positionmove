//write here your js
$(document).mousemove(function(e) {
    let body_size_x = $( window ).width();
    let body_size_y = $( window ).height();
    let left_dir = e.pageX;
    let top_dir = e.pageY;
    $('#body').html(body_size_x + ' + ' + body_size_y);

    $('#top').html(top_dir);
    $('#left').html(left_dir);

    if (left_dir >  body_size_y) {
      $('#box').css("background-color","pink");
    } else {
      $('#box').css("background-color","blue");
    }
});

$(document).ready(function(){
 $('#body').css('top','200px;');
});


$(document).ready(function() {
	$('#button').click( function () {
    let rez = $('<div class="popup">+ 1 point </div>');
    $('#main').append(rez);
    setTimeout( function() { rez.remove(); }, 500);
  });
});
