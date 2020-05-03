$("button").on("click", function () {
    //this is getting out id value ( ex: "9-button")
    var itemindex = $(this).attr("id");
    //this is making the value to a list of strings ( ex: [ "9" , "button"]), then were grabbing the first item
    var index = itemindex.split("-")[0];
    //making a new tag that corresponds to the input value fields 
    var userData = $("#" + index + "-input").val();
    //we can store it there so that we can retrieve it later with same id tag
    localStorage.setItem(index, userData);
});

//this is building our time blocks 
for (var i = 9; i < 18; i++) {
    //(ex:  id = "10-input")
    //this is displaying the local storage item for that current hour on to the input field 
    $("#" + i + "-input").val(localStorage.getItem(i));
    var currentTime = moment().hours();

    //this will add the appropriate class to the time blocks 
    if (i < currentTime) {
        $("#" + i + "-row").addClass("past");
    }
    else if (i === currentTime) {
        $("#" + i + "-row").addClass("present");
    }
    else {
        $("#" + i + "-row").addClass("future");
    }
}

$("#currentDay").text(moment().format('LLLL'));