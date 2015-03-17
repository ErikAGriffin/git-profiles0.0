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
        console.log(response);

        var test = Mustache.render(template, response)
        console.log(test)
        $('main').append(test);





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






