$( document ).ready(function() {



    $.getJSON('http://orfi.uwm.edu.pl/~s145968/Pr2/Ajax/dane.json', function(data) {

    var items = [];
    $.each( data, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
    if (Array.isArray(items) && items.length>0) {
        $("<ul/>", {
            "class": "items-list",
            html: items.join("")
        }).appendTo("data");


        $(".items-list").html(data);
    }
    else{alert("failed to download Orfi JSON")}
})});