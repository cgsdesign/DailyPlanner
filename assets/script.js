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

    textIWant = $(this).siblings("#text").val()
    console.log(textIWant)
    
  var saveTask = function () {
    localStorage.setItem(parent, textIWant)
  }
saveTask()
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