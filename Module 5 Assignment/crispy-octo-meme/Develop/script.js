
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements

const dayjs = require("dayjs");

// in the html.
$(document).ready(function () {
var currentDate = dayjs().format('MM/DD/YYYY')
var currentDayEl = $("#currentDay")
currentDayEl.text(currentDate)
var currentHour = dayjs().hour()
console.log(currentHour)
var allTimeEl = $(".time-block")
console.log(allTimeEl)
for (let i = 0; i < allTimeEl.length; i++) {
  var timeBlockEl = allTimeEl[i]
  // var blockID = timeBlockEl.attr('id')
  var blockID = timeBlockEl.id
  console.log(blockID)
}
}

  //function to compare current hour to hour on planner//

  function trackTime() {   
    $(".time-block").each(function(){
        var currentHour = parseInt($(this).attr("id").split("hour-")[1]);

  if (currentHour === dayjs().hour()){
    $(this).addClass("present");
    $(this).removeClass("past");
    $(this).removeClass("future");
  }
  if (currentHour < dayjs().hour()){
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
  }
  if (currentHour > dayjs().hour()){
    $(this).addClass("future");
    $(this).removeClass("past");
    $(this).removeClass("present");
  }

  $("#8 .description").val(localStorage.getItem("hour-8"));
  $("#9 .description").val(localStorage.getItem("hour-9"));
  $("#10 .description").val(localStorage.getItem("hour-10"));
  $("11 .description").val(localStorage.getItem("hour-11"));
  $("#12 .description").val(localStorage.getItem("hour-12"));
  $("#13 .description").val(localStorage.getItem("hour-13"));
  $("#14 .description").val(localStorage.getItem("hour-14"));
  $("#15 .description").val(localStorage.getItem("hour-15"));
  $("#16 .description").val(localStorage.getItem("hour-16"));
  $("#17 .description").val(localStorage.getItem("hour-17"));

})

}


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page//