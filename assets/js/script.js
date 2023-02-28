// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //-------------------------------------------------------------
  // adds an event listener to our save button when clicked
  $(".saveBtn").on("click", function () {
    // this func. will take the attribute of each button's parent to tell which hour was clicked on save and what task was added.
    // set as variable to access save hour and user's task
    let hourId = $(this).parent().attr("id");
    let taskText = $(this).siblings("textarea").val()
    console.log(hourId)
    console.log(taskText)
    // setup local storage 
    localStorage.setItem(hourId, taskText)
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // iterates through each time block
  $(".time-block").each(function () {
    // gives current hour
    let currentHour = dayjs().hour()

  //  takes the id from which ever time block, splits 'hour' and 'number' into an array. Allows us to get the 'number' using the index
    let id = $(this).attr("id").split('-')[1]
    // if statemet to change color based on hour 
    if( id < currentHour){
      // past white block
      $(this).css("background-color", "#d3d3d3");
    }
    if( id == currentHour){
      // present red block
      $(this).css("background-color", " #ff6961");
    }
    if( id > currentHour){
      // future green block
      $(this).css("background-color", " #77dd77");
    }
    
  })
  // -------------------------------------------------------------------
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //--------------------------------------------------------------

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //---------------------------------------------------------
  $(".time-block").each(function () {
    $(this).attr("id")
    let blockId = $(this).attr("id")
    // 'this' points to the current time block so we know where to put that info
    $(this).children("textarea").val(localStorage.getItem(blockId))

  })
  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format('ddd, MMM D YYYY'));
});
