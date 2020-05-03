$("button").on("click", function(){
    var itemindex = $(this).attr("id");
    console.log(itemindex);
    var index = itemindex.split("-")[0];//becomes a 2 item list of whatever-whatever
    console.log(index);
    var userData = $("#"+index+"-input").val();
    console.log(userData);
    localStorage.setItem(index, userData);
});

    for (var i = 9; i < 18; i++) {
        $("#"+i+"-input").val(localStorage.getItem(i));
        var currentTime = moment().hours();
        
        if ( i < currentTime) {
            $("#"+i+"-row").addClass("past");
        }
        else if (i === currentTime) {
            $("#"+i+"-row").addClass("present");
        }
        else {
            $("#"+i+"-row").addClass("future");
        }
    }

    $("#currentDay").text(moment().format('LLLL'));