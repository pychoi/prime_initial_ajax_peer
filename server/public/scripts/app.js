$(document).ready(function(){

    //append a button.  Upon click, call getData function

    $(".start").on('click', function(){
        getData();
        this.remove();
    });

    $('.container-fluid').on('click', '.delete', function() {
        $(this).parent().remove();
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
        $('.container-fluid').append("<div class='person thumbnail well col-md-4'></div>");

        var $el = $('.container-fluid').children().last();
        $el.append("<div class='images col-md-12'><img src='" + people[i].imageURL + "' alt='profilepic' height='200' weight='200'></div>");

        $el.append("<div class='person-info col-md-12'>" +
            "<p>Name: " + people[i].name + "</p>" +
            "<p>Location: " + people[i].location + "</p>" +
            "<p>Position: " + people[i].position + "</p>" +
            "</div>");

        $el.append("<div class='delete btn btn-danger'>Delete Me</div>");

    }
}