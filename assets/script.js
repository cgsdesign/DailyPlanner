// create elements on page using bootstrap
// add clickable to make active
// make save box save linked time row
//add clock to top of page - I want to!
// add class to date
        // if current time hour < make grey
        //if current time hour = make orange
        //if future time hour > make green... use their colors... cry
var nineAM = localStorage.getItem("9am")
var tenAM = localStorage.getItem("10am")
var elevenAM = localStorage.getItem("11am")
var twelvePM = localStorage.getItem("12pm")
var onePM = localStorage.getItem("1pm")
console.log(nineAM)

$(".btn").on("click", function() {
  // get the parent's id attribute
    var parent = $(this).closest('div').attr('id')

  //Get text I want from text field
    textIWant = $(this).siblings("#text").val()

  //save
  var saveTask = function () {
    localStorage.setItem(parent, textIWant)   
  }
    saveTask()
  });

  var pullTask = function () {
    pulledTask = localStorage.getItem(parent,textIWant)
  }

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