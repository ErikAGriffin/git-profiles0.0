$(document).ready(function() {

  $('.gitprofile').on('submit', function(event) {

    event.preventDefault();


    var username = $('.username').val();
    var url = 'http://api.github.com/users/'+username;
    var template = $('template').html();

    $.ajax({
      url: url,
      type: "GET",
      dataType: 'jsonp',
      success: function(response){

        console.log(response);




      },
      error: function(){

        console.log("error!");
      }
    })
    .always(function() {
      $('.username').val('');
    });






  });

});






