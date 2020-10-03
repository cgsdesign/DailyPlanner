// create elements on page using bootstrap
// add clickable to make active
// make save box save linked time row
//add clock to top of page - I want to!
// add class to date
        // if current time hour < make grey
        //if current time hour = make orange
        //if future time hour > make green



$(".btn").on("click", function() {

  // get the parent's id attribute
    var parent = $(this).closest('div').attr('id')
    console.log(parent)

    textIWant = $( "parent > #text" ).value
    console.log(textIWant)

    var saveTasks = function() {
      localStorage.setItem("tasks", JSON.stringify(textIWant));
    };
    saveTasks()
    console.log($(parent).children("textarea"))
    //   console.log(status.attr + "buton 9am clicked")
    //tasks[status][index].text = text;//track item by parent's id, and index to replace text
    //saveTasks();//update local storage
  
    // recreate p element
    //var taskP = $("<p>")
    //  .text(text);
  
    // replace textarea with p element
    //  $(this).replaceWith(taskP);
  });
  console.log ("hooked up!")
//switching classes
// var currentHour = 2
// var timeBar = 4
// var switchTimeClass = function(){
//     if (currentHour =< timeBar) {
//       $( ".future" ).switchClass( "future", "present", 1000 )
//     }
//     else if (time === currentHour) {
//       $( ".present" ).switchClass( "present", "past", 1000 );
//     }
//     else () {
//       return
//     }
// }