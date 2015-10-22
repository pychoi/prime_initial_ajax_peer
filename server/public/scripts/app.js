$(document).ready(function(){

    //append a button.  Upon click, call getData function

    $(".start").on('click', function(){
        getData();
        this.remove();
    });

    $('.container').on('click', '.delete', function() {
        $(this).parent().parent().remove();
    });

});

function getData() {
    $.ajax({
        type : "GET",
        url : "/data",
        success : function(data) {
            //console.log("Round trip complete");
            appendDom(data);
        }
    });
}

function appendDom(data) {
  //append data on the DOM
    var people = data.people;

    for(var i = 0; i < people.length; i++){
        $('.container').append("<div class='person thumbnail well col-md-12'></div>");

        var $el = $('.container').children().last();
        $el.append("<div class='col-md-3'><img src='" + people[i].imageURL + "' alt='profilepic' height='200' weight='200'></div>");

        $el.append("<div class='person-info col-md-9'>" +
            "<p>Name: " + people[i].name + "</p>" +
            "<p>Location: " + people[i].location + "</p>" +
            "<p>Position: " + people[i].position + "</p>" +
            "<button class='delete btn btn-danger'>Delete Me</button>" +
            "</div>");

    }
}