
$(function () {

  // adds an event listener to our save button when clicked
  $(".saveBtn").on("click", function () {
    // this func. will take the attribute of each button's parent to tell which hour was clicked on save 
    // and what task was added.
    // set as variable to access save hour and user's task
    let hourId = $(this).parent().attr("id");
    let taskText = $(this).siblings("textarea").val()
   
    // setup local storage 
    localStorage.setItem(hourId, taskText)
  })
  
  // this func. iterates through each time block
  $(".time-block").each(function () {
    // gives current hour
    let currentHour = dayjs().hour()

  //  takes the id from which ever time block, splits 'hour' and 'number' into an array. 
  // Allows us to get the 'number' using the index
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
  

// gets user's input that was in localstorage and set 
  
  $(".time-block").each(function () {
    $(this).attr("id")
    let blockId = $(this).attr("id")
    // 'this' points to the current time block so we know where to put that info
    $(this).children("textarea").val(localStorage.getItem(blockId))

  })
//  displays current date at top of page 
  $("#currentDay").text(dayjs().format('ddd, MMM D YYYY'));
});
