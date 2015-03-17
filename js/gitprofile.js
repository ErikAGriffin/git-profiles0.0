$(document).ready(function() {

  $('.gitprofile').on('submit', function(event) {

    event.preventDefault();

    var username = $('.username').val();
    var url = 'http://api.github.com/users/'+username;
    var template = $('template').html();

    $.ajax({
      url: url,
      type: "GET",
      dataType: 'json',
      success: function(response){
        $('main').append(Mustache.render(template,response));
        $('.system-message').text('');
      },
      error: function(error){

        console.log("error: "+error.responseJSON.message);
        $('.system-message').text(error.responseJSON.message);
      }
    })
    .always(function() {
      $('.username').val('');
    });






  });

});






